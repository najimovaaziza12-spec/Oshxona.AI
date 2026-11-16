from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import shutil
import os
import uuid
from datetime import datetime

app = FastAPI(title="Oshxona.AI Global API", version="6.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
os.makedirs(os.path.join(UPLOAD_DIR, "videos"), exist_ok=True)
os.makedirs(os.path.join(UPLOAD_DIR, "avatars"), exist_ok=True)
os.makedirs(os.path.join(UPLOAD_DIR, "banners"), exist_ok=True)

app.mount("/uploads", StaticFiles(directory=UPLOAD_DIR), name="uploads")

users_db = {}
videos_db = []

class UserRegister(BaseModel):
    name: str
    email: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

@app.get("/")
def root():
    return {
        "status": "online",
        "platform": "Oshxona.AI",
        "author": "Najimov Abdushukur (Founder & Lead Developer)"
    }

@app.post("/api/auth/register")
def register_user(user: UserRegister):
    if user.email in users_db:
        raise HTTPException(status_code=400, detail="Bu email allaqachon ro'yxatdan o'tgan!")
    users_db[user.email] = {
        "name": user.name,
        "email": user.email,
        "password": user.password,
        "channel_name": f"{user.name} Oshpaz",
        "subscribers": 1250,
        "videos_count": 28,
        "is_subscribed": False
    }
    return {"success": True, "user": users_db[user.email]}

@app.post("/api/auth/login")
def login_user(user: UserLogin):
    if user.email not in users_db or users_db[user.email]["password"] != user.password:
        raise HTTPException(status_code=401, detail="Email yoki parol noto'g'ri!")
    return {"success": True, "user": users_db[user.email]}

@app.post("/api/videos/upload")
async def upload_video(
    author: str = Form(...),
    title: str = Form(...),
    description: str = Form(""),
    video_type: str = Form(...),
    file: UploadFile = File(...)
):
    ext = os.path.splitext(file.filename)[1]
    unique_name = f"{uuid.uuid4()}{ext}"
    file_path = os.path.join(UPLOAD_DIR, "videos", unique_name)
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
        
    new_video = {
        "id": str(uuid.uuid4()),
        "author": author,
        "channel_avatar": author[0].upper() if author else "A",
        "subscribers": 1420,
        "videos_count": 35,
        "title": title,
        "description": description,
        "video_type": video_type,
        "video_url": f"/uploads/videos/{unique_name}",
        "views": 150,
        "likes": 12,
        "dislikes": 0,
        "is_subscribed": False,
        "comments": [
            {"author": "Aziza", "text": "Juda mazali chiqibdi, rahmat!"},
            {"author": "Islom", "text": "Albatta tayyorlab ko'raman!"}
        ],
        "userReaction": None,
        "created_at": datetime.now().strftime("%H:%M")
    }
    videos_db.insert(0, new_video)
    return {"success": True, "video": new_video}

@app.get("/api/videos")
def get_videos(tab: str = "reels"):
    if tab == "trends":
        return sorted(videos_db, key=lambda x: (x["likes"] * 2 + x["views"]), reverse=True)
    return [v for v in videos_db if v["video_type"] == tab]