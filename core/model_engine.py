import os
import json
import torch
import torch.nn as nn
from torchvision import transforms, models
from PIL import Image

TRANSFORM = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

SPECIES_CLASSES = ['Buffalo', 'Cow', 'None']

BREED_CLASSES = [
    'Alambadi', 'Amritmahal', 'Ayrshire', 'Banni', 'Bargur', 'Bhadawari', 'Brown_Swiss', 'Dangi', 
    'Deoni', 'Gir', 'Guernsey', 'Hallikar', 'Hariana', 'Holstein_Friesian', 'Jaffrabadi', 'Jersey', 
    'Kangayam', 'Kankrej', 'Kasargod', 'Kenkatha', 'Kherigarh', 'Khillari', 'Krishna_Valley', 
    'Malnad_gidda', 'Mehsana', 'Murrah', 'Nagori', 'Nagpuri', 'Nili_Ravi', 'Nimari', 'Ongole', 
    'Pulikulam', 'Rathi', 'Red_Dane', 'Red_Sindhi', 'Sahiwal', 'Surti', 'Tharparkar', 'Toda', 
    'Umblachery', 'Vechur'
]

class PashuDrishtiEngine:
    def __init__(self, models_dir='models', metadata_path='data/breed_metadata.json'):
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        self.species_model_path = os.path.join(models_dir, 'best_cow_buffalo_none_classifier.pth')
        self.breed_model_path = os.path.join(models_dir, 'breed_classifier.pth')
        
        self.breed_metadata = {}
        if os.path.exists(metadata_path):
            with open(metadata_path, 'r', encoding='utf-8') as f:
                self.breed_metadata = json.load(f)

        self.breed_translations = {}
        trans_path = os.path.join(os.path.dirname(metadata_path), 'breed_translations.json')
        if os.path.exists(trans_path):
            with open(trans_path, 'r', encoding='utf-8') as f:
                self.breed_translations = json.load(f)

        self.species_model = self._load_model(self.species_model_path, num_classes=3)
        self.breed_model = self._load_model(self.breed_model_path, num_classes=len(BREED_CLASSES))

    def _load_model(self, path, num_classes):
        model = models.resnet18(weights=None)
        num_ftrs = model.fc.in_features
        model.fc = nn.Linear(num_ftrs, num_classes)
        if os.path.exists(path):
            state_dict = torch.load(path, map_location=self.device)
            model.load_state_dict(state_dict)
        model.to(self.device)
        model.eval()
        return model

    def identify(self, pil_img, top_k=3, min_species_confidence=0.55):
        tensor = TRANSFORM(pil_img).unsqueeze(0).to(self.device)
        
        # Tier 1: Species Detection for cattle breed
        with torch.no_grad():
            species_out = self.species_model(tensor)
            species_probs = torch.softmax(species_out, dim=1)[0]
            species_idx = torch.argmax(species_probs).item()
            species_conf = species_probs[species_idx].item()
            detected_species = SPECIES_CLASSES[species_idx]

        if detected_species == 'None' or species_conf < min_species_confidence:
            return {
                'success': False,
                'species': detected_species,
                'species_confidence': round(species_conf * 100, 2),
                'message': 'No cattle or buffalo clearly identified in image.',
                'top_breeds': []
            }

        # Tier 2: Top-3 Softmax Breed Ranking
        with torch.no_grad():
            breed_out = self.breed_model(tensor)
            breed_probs = torch.softmax(breed_out, dim=1)[0]
            top_probs, top_indices = torch.topk(breed_probs, k=min(top_k, len(BREED_CLASSES)))

        top_breeds = []
        for prob, idx in zip(top_probs, top_indices):
            breed_name = BREED_CLASSES[idx.item()]
            meta = self.breed_metadata.get(breed_name, {
                'origin': 'India',
                'category': 'Indigenous Bovine',
                'hallmarks': 'Refer to standard livestock atlas.'
            })
            trans = self.breed_translations.get(breed_name, {
                'names': {},
                'origin': {},
                'hallmarks': {}
            })
            top_breeds.append({
                'breed': breed_name.replace('_', ' '),
                'raw_name': breed_name,
                'confidence': round(prob.item() * 100, 2),
                'origin': meta.get('origin', 'Indigenous'),
                'category': meta.get('category', 'Dual-purpose'),
                'hallmarks': meta.get('hallmarks', ''),
                'translations': trans
            })

        return {
            'success': True,
            'species': detected_species,
            'species_confidence': round(species_conf * 100, 2),
            'top_breeds': top_breeds
        }
