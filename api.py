from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles
from PIL import Image, UnidentifiedImageError
import io
import os
from core.model_engine import PashuDrishtiEngine

app = FastAPI(
    title="PashuDrishti AI - Bharat Pashudhan Portal",
    description="Official Bovine Morphometrics & Breed Classifier",
    version="2.4.0"
)

# 1. Security: Limit max upload size (10 MB)
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB
ALLOWED_MIME_TYPES = {"image/jpeg", "image/png", "image/webp"}

# Static files mounting
os.makedirs("static", exist_ok=True)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Initialize Inference Engine
engine = PashuDrishtiEngine(models_dir="models", metadata_path="data/breed_metadata.json")

@app.get("/", response_class=HTMLResponse)
async def serve_ui():
    template_path = os.path.join("templates", "index.html")
    if not os.path.exists(template_path):
        return HTMLResponse(content="<h3>Template not found</h3>", status_code=500)
    with open(template_path, "r", encoding="utf-8") as f:
        html_content = f.read()
    return HTMLResponse(content=html_content)

@app.post("/api/v1/classify")
async def classify_livestock(file: UploadFile = File(...), top_k: int = 3):
    # 2. Security validation on MIME type
    if file.content_type and file.content_type not in ALLOWED_MIME_TYPES:
        return JSONResponse(
            status_code=400,
            content={"success": False, "message": "Invalid file format. Only JPG, PNG, and WEBP images are allowed."}
        )
    
    # 3. Security: Sanitize top_k bounds
    safe_top_k = max(1, min(int(top_k), 5))

    try:
        contents = await file.read()
        
        # Security: Check file size
        if len(contents) > MAX_FILE_SIZE:
            return JSONResponse(
                status_code=413,
                content={"success": False, "message": "File exceeds maximum permitted size of 10MB."}
            )
        
        if len(contents) == 0:
            return JSONResponse(
                status_code=400,
                content={"success": False, "message": "Uploaded file is empty."}
            )

        # Secure image decoding (protect against decompression bombs)
        Image.MAX_IMAGE_PIXELS = 25000000  # Max 25 megapixels
        image = Image.open(io.BytesIO(contents))
        image.verify()  # Verify integrity without decoding fully
        
        # Re-open after verify() closes the stream
        image = Image.open(io.BytesIO(contents)).convert('RGB')
        
        results = engine.identify(image, top_k=safe_top_k)
        return JSONResponse(content=results)
        
    except UnidentifiedImageError:
        return JSONResponse(
            status_code=400,
            content={"success": False, "message": "Corrupted or non-image file uploaded."}
        )
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"success": False, "message": "An error occurred during diagnostic evaluation."}
        )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
