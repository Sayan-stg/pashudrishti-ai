<div align="center">

# 🇮🇳 PashuDrishti AI (पशु-दृष्टि)
### *AI-Driven Bovine Species & Breed Triangulation System*
**Problem Statement PS-5: AI-Driven Cattle & Buffalo Breed Identification**  
*Built for the Bharat Pashudhan National Livestock Census Ecosystem*

<br/>

[![Live Web App](https://img.shields.io/badge/🚀_Live_Portal-pashudrishti--ai-1b633e?style=for-the-badge&logo=render&logoColor=white)](https://pashudrishti-ai-yxm3.onrender.com/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Sayan-stg/pashudrishti-ai)
[![Python 3.12](https://img.shields.io/badge/Python-3.12-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![PyTorch](https://img.shields.io/badge/Inference-PyTorch_ResNet18-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)](https://pytorch.org/)

<br/>

> 🌐 **Permanent Live Demo:** **[https://pashudrishti-ai-yxm3.onrender.com/](https://pashudrishti-ai-yxm3.onrender.com/)**  
> *(Tested across Desktop, Android & iOS Mobile Browsers)*

<br/>

---

### 🌟 Live Portal Architecture & Feature Showcase

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   Step 1: Regional Lang ──► Step 2: Photo Capture ──► Step 3: Top-3 Breeds  │
│   (EN, HI, BN, GU, MR)      (Device / Field Cam)     (Softmax Confidence)   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

</div>

---

## 📌 Problem & Hackathon Context

Field enumerators and livestock inspectors frequently misclassify indigenous bovine breeds when entering records into the **Bharat Pashudhan App**, degrading national census accuracy, genetic tracking, and government livestock welfare schemes.

### Why Misclassification Happens:
- **Visual Homology**: Indigenous Zebu cattle (e.g., *Sahiwal* vs. *Red Sindhi*, or *Nagori* vs. *Hariana*) share overlapping coat colors and sizes.
- **Language Barriers**: Grassroots enumerators in rural or tribal areas struggle with rigid English-only technical names.
- **Single Rigid Classifiers**: Traditional classifiers output a single, brittle 51% guess with no alternatives or verification hallmarks.

---

## ⚡ The PashuDrishti AI Solution

**PashuDrishti AI (पशु-दृष्टि)** addresses these systemic hurdles through a multi-tier, field-tested architecture:

### 1. 🧬 Multi-Tier Intelligent Pipeline
- **Tier 1 (Species Triage)**: Distinguishes non-livestock images and validates *Bos indicus / Taurus* (Cow) vs. *Bubalus bubalis* (Riverine Buffalo).
- **Tier 2 (Top-3 Probabilistic Ranking)**: Computes a full softmax distribution across **41 breeds**, displaying the **Top 3 candidates** with animated probability bars.

### 2. 🌐 Grassroots Multilingual Engine (5 Indian Languages)
Real-time localized interface with dynamic script transliteration and anatomical terms:
- 🇬🇧 **English** (Official default)
- 🇮🇳 **हिन्दी (Hindi)**: e.g., साहीवाल (Sahiwal) • दुधारू (Milch)
- 🇮🇳 **বাংলা (Bengali)**: e.g., সাহিওয়াল (Sahiwal) • দুগ্ধবতী (Milch)
- 🇮🇳 **ગુજરાતી (Gujarati)**: e.g., સાહીવાલ (Sahiwal) • દૂધાળી (Milch)
- 🇮🇳 **मराठी (Marathi)**: e.g., साहिवाल (Sahiwal) • दुभती जात (Milch)

### 3. 📍 On-Site Morphological Hallmarks
Supplies native geographic tract (*e.g., Kutch, Saurashtra, Montgomery, Chambal*) and visual verification checkpoints (*horns, ear curvature, dewlap, coat pattern*) so workers can confirm the AI recommendation on the spot.

### 4. 📱 Smartphone-First 3-Step Flow
- **Step 1**: One-tap regional language selection.
- **Step 2**: File dropzone or in-browser live **Field Camera** with instant image replacement (`🔄 Change Photo`).
- **Step 3**: Ranked breed diagnosis + one-click **Certified Field Slip Download (`.txt`)** for data entry compliance.

---

## 📊 Comprehensive 41-Breed Dataset Coverage

<details>
<summary><b>Click to expand all 41 registered bovine breeds</b></summary>

### 🐄 Indigenous Zebu & Crossbred Cattle (26 Breeds)
| Breed | Native Tract / State | Primary Purpose |
| :--- | :--- | :--- |
| **Gir** | Gujarat (Gir Hills & Saurashtra) | Milch (A2 Dairy) |
| **Sahiwal** | Punjab & Rajasthan border | Milch (Premier Indian Dairy) |
| **Kankrej** | Gujarat (Kutch) & Rajasthan | Dual-Purpose (*Sawai Chaal*) |
| **Ongole** | Andhra Pradesh (Prakasam) | Dual-Purpose (Heavy Draught) |
| **Tharparkar** | Rajasthan (Thar Desert) | Dual-Purpose (Desert Hardy) |
| **Red Sindhi** | Western India & Sindh | Milch (Heat Tolerant) |
| **Hallikar** | Karnataka (Mysore) | Draught (Prized Stamina) |
| **Khillari** | Maharashtra (Satara/Solapur) | Draught (Fast Trotting) |
| **Amritmahal** | Karnataka (Hassan) | Draught (Cavalry Transport) |
| **Kangayam** | Tamil Nadu (Coimbatore/Erode) | Draught (High Endurance) |
| **Dangi** | Maharashtra & Gujarat | Draught (Heavy Monsoon Hardy) |
| **Deoni** | Maharashtra (Marathwada) | Dual-Purpose |
| **Hariana** | Haryana & Punjab | Dual-Purpose |
| **Rathi** | Rajasthan (Bikaner/Jaisalmer) | Milch (Desert Dairy) |
| **Bargur** | Tamil Nadu (Bargur Hills) | Draught (Hill Terrain) |
| **Alambadi** | Tamil Nadu (Dharmapuri) | Draught |
| **Nagori** | Rajasthan (Nagaur) | Draught (Famous Trotters) |
| **Nimari** | Madhya Pradesh (Nimar) | Draught |
| **Pulikulam** | Tamil Nadu (Sivagangai/Madurai) | Draught (*Jallikattu* Agility) |
| **Umblachery**| Tamil Nadu (Nagapattinam) | Draught (Delta Paddy Fields) |
| **Kenkatha** | Bundelkhand (UP & MP) | Draught |
| **Kherigarh** | Uttar Pradesh (Lakhimpur Kheri) | Draught |
| **Krishna Valley**| Karnataka & Maharashtra | Draught (Deep Soil Tillage) |
| **Malnad Gidda** | Karnataka (Western Ghats) | Dwarf Milch (Miniature) |
| **Kasargod** | Kerala (Kasargod) | Miniature / Disease Resistant |
| **Vechur** | Kerala (Kottayam) | World's Smallest Cattle (Guinness) |

### 🐃 Indigenous Riverine Buffaloes (9 Breeds)
| Breed | Native Tract / State | Primary Purpose |
| :--- | :--- | :--- |
| **Murrah** | Haryana (Rohtak/Hisar) & Punjab | World Champion Dairy (*Black Gold*) |
| **Jaffrabadi** | Gujarat (Gir Forest) | Heavy Riverine Dairy |
| **Mehsana** | Gujarat (Mehsana) | High-Yield Dairy (Murrah × Surti) |
| **Nili-Ravi** | Punjab (Sutlej/Ravi) | Dairy (*Panch Kalyan* Markings) |
| **Bhadawari** | Uttar Pradesh & Madhya Pradesh | Highest Milk Fat (up to 13%) |
| **Surti** | Gujarat (Kaira/Baroda) | Economical Dairy (Sickle Horns) |
| **Banni** | Gujarat (Kutch Grasslands) | Nocturnal Grazer / Arid Resilient |
| **Nagpuri** | Maharashtra (Vidarbha) | Dual-Purpose (Sword Horns) |
| **Toda** | Tamil Nadu (Nilgiri Hills) | Tribal Heritage Hill Buffalo |

### 🌍 Exotic Crossbreeds (6 Breeds)
| Breed | Origin | Primary Purpose |
| :--- | :--- | :--- |
| **Holstein Friesian** | Netherlands / Germany | Highest Global Milk Yield |
| **Jersey** | Channel Islands | High Butterfat Dairy |
| **Brown Swiss** | Switzerland | High Protein Dairy |
| **Ayrshire** | Scotland | Hardy European Dairy |
| **Guernsey** | Guernsey Island | Beta-Carotene Golden Milk |
| **Red Dane** | Denmark | Heavy European Dairy |

</details>

---

## 🛠️ Technology Stack

<div align="center">

| Layer | Technologies Used |
| :--- | :--- |
| **Inference Engine** | Deep Residual Network (`ResNet-18`), PyTorch CPU Optimization, Softmax Distribution |
| **Backend API** | FastAPI, Uvicorn, Python 3.12, Multipart Streaming |
| **Frontend Architecture** | High-Contrast Sunlight UI, HTML5 Canvas, MediaDevices API, Responsive Stepper |
| **Security & Auditing** | MIME Validation, 10MB Payload Protection, Decompression Bomb Defense |
| **Cloud Deployment** | Render Cloud (Singapore Edge Node), Docker Containerization, Git-LFS |

</div>

---

## 💻 Local Quickstart Guide

### 1. Clone Repository & Setup
```bash
git clone https://github.com/Sayan-stg/pashudrishti-ai.git
cd pashudrishti-ai
```

### 2. Create Virtual Environment
```bash
# Windows
python -m venv .venv
.\.venv\Scripts\activate

# Linux / macOS
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Launch Application
```bash
python -m uvicorn api:app --host 127.0.0.1 --port 8000
```
Open your browser at: **`http://localhost:8000`**

---

## 📜 Official Field Record Export Sample

```text
========================================================
BHARAT PASHUDHAN LIVESTOCK IDENTIFICATION RECORD
Certified Field Verification Slip (PashuDrishti AI v2.4)
========================================================
Language          : हिन्दी
Species           : Cow (Bos indicus / Taurus) (99.99%)
Assigned Breed    : साहीवाल (Sahiwal)
Confidence        : 91.04%
Category          : दुधारू (Milch)
Native State      : पंजाब और राजस्थान सीमा (मोंटगोमरी क्षेत्र)
Field Hallmarks   : लाल-भूरा रंग, ढीली त्वचा और बड़ा लटकता हुआ गलकंबल (लोला), भारत की सर्वश्रेष्ठ दुधारू देसी गाय।

Top 3 Triangulated Breeds:
1. Sahiwal (91.04%)
2. Red Sindhi (6.75%)
3. Vechur (1.46%)
========================================================
Compliant with Ministry of Animal Husbandry & Dairying
```

---

## 👥 Team

| Name | Registration Number |
| :--- | :--- |
| Khyati Singh | 25BCE11336 |
| Yashraj | 25BCE11417 |
| Sayan Mondal | 25BAI11532 |
| Mohit Borekar | 25BCG10008 |
| Aditya Kumar Singh | 25BCE11333 |

---

<div align="center">

**Crafted with pride for the Bharat Pashudhan National Livestock Mission 🇮🇳**

</div>
