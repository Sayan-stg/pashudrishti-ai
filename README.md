# 🇮🇳 PashuDrishti AI (पशु-दृष्टि)
### AI-Powered Cattle & Buffalo Breed Identification for the Bharat Pashudhan Ecosystem
**Hackathon Problem Statement PS-5: AI-Driven Cattle & Buffalo Breed Identification**

---

## 📌 Problem & Motivation
Field officers and enumerators frequently misclassify cattle and buffalo breeds when entering data into the **Bharat Pashudhan App**, leading to distorted national livestock censuses and flawed policy decisions.

**PashuDrishti AI** addresses this with a dual-tier intelligent pipeline:
1. **Bovine Verification (Tier 1)**: Filters non-livestock images and classifies species (Cow vs. Buffalo).
2. **Top-3 Softmax Breed Suggestion (Tier 2)**: Rather than offering one rigid answer, the model provides the top 3 ranked breeds with confidence breakdown bars.
3. **Indigenous Knowledge & Hallmarks**: Supplies regional origin and visual verification checkpoints (horn structure, forehead curvature, coat pattern) so enumerators can cross-check on-site.
4. **Watermarked Verification**: Generates watermarked audit records with downloadable field slips.

---

## 🚀 How to Run the Project

### 1. Prerequisites
- Python 3.10, 3.11, or 3.12 (recommended)
- GPU optional (runs smoothly on CPU)

### 2. Setup Virtual Environment
```bash
# Clone or navigate to your project directory
cd Cattle

# Create and activate a virtual environment
python -m venv venv
# On Windows PowerShell:
.\venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Launch the Web Application
```bash
streamlit run app.py
```
*The app will automatically open in your browser at `http://localhost:8501`.*

### 5. (Optional) Run the REST API Backend
For integration into mobile apps or microservices:
```bash
uvicorn api:app --reload --port 8000
```
- Interactive Swagger API docs: `http://localhost:8000/docs`

---

## 🧠 Model Architecture & Pipeline
- **Backbone**: Deep Residual Network (`ResNet-18`) fine-tuned for bovine taxonomy.
- **Species Classifier**: 3-Class discriminator (`Cow`, `Buffalo`, `None`).
- **Breed Classifier**: 41 classes encompassing indigenous Indian zebu breeds, river buffaloes, and exotic crossbreeds.
- **Dataset Coverage**: Sourced from Indian livestock research tracts, Kaggle, and Hugging Face bovine repositories.

---

## 📊 Covered Breeds (41 Classes)
- **Indigenous Cows**: Gir, Sahiwal, Kankrej, Ongole, Tharparkar, Red Sindhi, Hallikar, Khillari, Amritmahal, Kangayam, Dangi, Deoni, Hariana, Rathi, Bargur, Alambadi, Nagori, Nimari, Pulikulam, Umblachery, Kenkatha, Kherigarh, Krishna Valley, Malnad Gidda, Kasargod, Vechur.
- **Indigenous Buffaloes**: Murrah, Jaffrabadi, Mehsana, Nili-Ravi, Bhadawari, Surti, Banni, Nagpuri, Toda.
- **Exotic Dairy Breeds**: Holstein Friesian, Jersey, Brown Swiss, Ayrshire, Guernsey, Red Dane.
