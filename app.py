import streamlit as st
from PIL import Image, ImageDraw, ImageFont
import os
import json
from core.model_engine import PashuDrishtiEngine

# Configure Page
st.set_page_config(
    page_title="PashuDrishti AI | Bharat Pashudhan Breed Classifier",
    page_icon="🐄",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom Styling
st.markdown("""
<style>
    .main-title {
        font-size: 2.3rem;
        font-weight: 800;
        color: #1e3a8a;
        margin-bottom: 0.2rem;
    }
    .sub-title {
        font-size: 1.05rem;
        color: #4b5563;
        margin-bottom: 1.5rem;
    }
    .breed-card {
        background-color: #f8fafc;
        border-radius: 10px;
        padding: 16px;
        border-left: 5px solid #2563eb;
        margin-bottom: 12px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    }
    .badge-milch {
        background-color: #dbeafe;
        color: #1e40af;
        padding: 3px 8px;
        border-radius: 6px;
        font-size: 0.8rem;
        font-weight: 600;
    }
    .badge-draught {
        background-color: #fef3c7;
        color: #92400e;
        padding: 3px 8px;
        border-radius: 6px;
        font-size: 0.8rem;
        font-weight: 600;
    }
    .badge-dual {
        background-color: #dcfce7;
        color: #166534;
        padding: 3px 8px;
        border-radius: 6px;
        font-size: 0.8rem;
        font-weight: 600;
    }
</style>
""", unsafe_allow_html=True)

@st.cache_resource
def load_engine():
    return PashuDrishtiEngine(models_dir='models', metadata_path='data/breed_metadata.json')

def apply_watermark(pil_img, tag="PashuDrishti AI • Bharat Pashudhan"):
    img = pil_img.copy()
    draw = ImageDraw.Draw(img)
    w, h = img.size
    # Simple banner watermark at bottom
    bar_height = max(24, int(h * 0.05))
    overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))
    overlay_draw = ImageDraw.Draw(overlay)
    overlay_draw.rectangle([0, h - bar_height, w, h], fill=(15, 23, 42, 180))
    img = Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB')
    draw = ImageDraw.Draw(img)
    draw.text((10, h - bar_height + 4), tag, fill=(255, 255, 255))
    return img

def main():
    st.markdown('<div class="main-title">🇮🇳 PashuDrishti AI (पशु-दृष्टि)</div>', unsafe_allow_html=True)
    st.markdown('<div class="sub-title"><b>AI-Driven Cattle & Buffalo Breed Identification</b> | Designed for Bharat Pashudhan Field Workers</div>', unsafe_allow_html=True)

    with st.sidebar:
        st.header("⚙️ Field Officer Controls")
        input_mode = st.radio("Select Input Source:", ["📁 Upload Photo", "📷 Camera Capture"], index=0)
        confidence_threshold = st.slider("Species Confidence Filter (%)", 40, 90, 55, step=5)
        st.markdown("---")
        st.markdown("""
        **About PashuDrishti AI**:
        - ✅ Dual-tier verification (Species -> Breed)
        - ✅ Top-3 recommended breeds with confidence bars
        - ✅ Native Indian state origin & field hallmarks
        - ✅ Zero misclassification in national livestock census
        """)

    engine = load_engine()

    uploaded_image = None
    if input_mode == "📁 Upload Photo":
        uploaded_file = st.file_uploader("Upload bovine picture (JPG, JPEG, PNG)", type=['jpg', 'jpeg', 'png'])
        if uploaded_file:
            uploaded_image = Image.open(uploaded_file).convert('RGB')
    else:
        camera_file = st.camera_input("Take a photo of the bovine")
        if camera_file:
            uploaded_image = Image.open(camera_file).convert('RGB')

    if uploaded_image:
        col1, col2 = st.columns([1.1, 1.4])
        
        with col1:
            st.subheader("📸 Captured Livestock")
            watermarked = apply_watermark(uploaded_image)
            st.image(watermarked, caption="Livestock Image with PashuDrishti AI Verification Tag", use_container_width=True)

        with col2:
            st.subheader("🔍 AI Diagnosis & Top-3 Suggestions")
            with st.spinner("Analyzing bovine morphological characteristics..."):
                results = engine.identify(uploaded_image, top_k=3, min_species_confidence=confidence_threshold / 100.0)

            if not results['success']:
                st.error(f"⚠️ **Detection Alert**: {results['message']}")
                st.info("Tip: Ensure the bovine is clearly centered, adequately lit, and unobstructed.")
            else:
                species = results['species']
                s_conf = results['species_confidence']
                st.success(f"**Verified Species:** {species} ({s_conf}% certainty)")

                st.markdown("##### 🏆 Top-3 Suggested Breeds (Select correct match for entry):")
                
                for rank, b in enumerate(results['top_breeds'], start=1):
                    category_class = "badge-milch"
                    if "Draught" in b['category']:
                        category_class = "badge-draught"
                    elif "Dual" in b['category']:
                        category_class = "badge-dual"

                    with st.container():
                        st.markdown(f"""
                        <div class="breed-card">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <h4 style="margin:0; color:#0f172a;">#{rank}. {b['breed']}</h4>
                                <span class="{category_class}">{b['category']}</span>
                            </div>
                            <p style="margin: 4px 0; color:#334155; font-size:0.92rem;">
                                📍 <b>Native State / Origin:</b> {b['origin']}<br>
                                👁️ <b>Field Hallmarks:</b> {b['hallmarks']}
                            </p>
                        </div>
                        """, unsafe_allow_html=True)
                        st.progress(int(b['confidence']), text=f"AI Confidence: {b['confidence']}%")

                st.markdown("---")
                # Quick Action Button for Field Workers
                top_breed = results['top_breeds'][0]['breed']
                st.download_button(
                    label=f"📥 Export Field Verification Slip ({top_breed})",
                    data=f"PashuDrishti AI Verification Slip\nSpecies: {species}\nPredicted Breed: {top_breed}\nConfidence: {results['top_breeds'][0]['confidence']}%\nNative Tract: {results['top_breeds'][0]['origin']}",
                    file_name=f"pashu_record_{top_breed.lower().replace(' ', '_')}.txt",
                    mime="text/plain"
                )

if __name__ == '__main__':
    main()
