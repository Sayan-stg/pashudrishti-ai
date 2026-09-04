import os
import json
import numpy as np
from PIL import Image

TRANSFORM_MEAN = np.array([0.485, 0.456, 0.406], dtype=np.float32)
TRANSFORM_STD = np.array([0.229, 0.224, 0.225], dtype=np.float32)

SPECIES_CLASSES = ['Buffalo', 'Cow', 'None']
BREED_CLASSES = [
    'Alambadi', 'Amritmahal', 'Ayrshire', 'Banni', 'Bargur', 'Bhadawari', 'Brown_Swiss', 'Dangi', 
    'Deoni', 'Gir', 'Guernsey', 'Hallikar', 'Hariana', 'Holstein_Friesian', 'Jaffrabadi', 'Jersey', 
    'Kangayam', 'Kankrej', 'Kasargod', 'Kenkatha', 'Kherigarh', 'Khillari', 'Krishna_Valley', 
    'Malnad_gidda', 'Mehsana', 'Murrah', 'Nagori', 'Nagpuri', 'Nili_Ravi', 'Nimari', 'Ongole', 
    'Pulikulam', 'Rathi', 'Red_Dane', 'Red_Sindhi', 'Sahiwal', 'Surti', 'Tharparkar', 'Toda', 
    'Umblachery', 'Vechur'
]

def preprocess(pil_img):
    img = pil_img.resize((224, 224)).convert('RGB')
    arr = np.array(img, dtype=np.float32) / 255.0
    arr = (arr - TRANSFORM_MEAN) / TRANSFORM_STD
    arr = np.transpose(arr, (2, 0, 1))
    return np.expand_dims(arr, axis=0)

def softmax(x):
    e_x = np.exp(x - np.max(x))
    return e_x / e_x.sum(axis=-1, keepdims=True)
