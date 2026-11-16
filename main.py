import os
import random
from typing import List, Optional
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

app = FastAPI(title="Oshxona.AI Pro API", version="5.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

frontend_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "frontend")
if os.path.exists(frontend_path):
    app.mount("/static", StaticFiles(directory=frontend_path), name="static")


class CommentModel(BaseModel):
    id: int
    author: str
    avatar: str
    text: str
    timestamp: str


class ReelModel(BaseModel):
    id: int
    chef_name: str
    chef_handle: str
    chef_avatar: str
    subscribers: str
    title: str
    description: str
    video_url: Optional[str] = None
    emoji_cover: str
    likes: int
    is_liked: bool = False
    is_following: bool = False
    views: str
    comments: List[CommentModel] = []


class NewReelRequest(BaseModel):
    chef_name: str
    chef_handle: str
    subscribers: str
    title: str
    description: str
    emoji_cover: str = "🍳"


class NewCommentRequest(BaseModel):
    author: str
    text: str


# Bo'sh reels bazasi (toza va real)
reels_db: List[ReelModel] = []

AI_FRIDGE_DETECTION_POOL = [
    ["tuxum", "pomidor", "piyoz", "pishloq", "non"],
    ["tovuq_goshti", "guruch", "sabzi", "sarimsoq", "yog"],
    ["mol_goshti", "kartoshka", "piyoz", "bulgor_qalampiri", "ko'katlar"],
    ["un", "sut", "tuxum", "shakar", "sariyog"]
]


@app.get("/")
async def root():
    return {"status": "success", "message": "Oshxona.AI API ishlayapti", "founder": "Najimov Abdushukur"}


@app.get("/api/reels", response_model=List[ReelModel])
async def get_reels():
    return reels_db


@app.post("/api/reels", response_model=ReelModel)
async def create_reel(reel: NewReelRequest):
    new_item = ReelModel(
        id=len(reels_db) + 1,
        chef_name=reel.chef_name or "Oshpaz",
        chef_handle=reel.chef_handle or "@oshpaz",
        chef_avatar="👨‍🍳",
        subscribers=reel.subscribers or "1.2K",
        title=reel.title,
        description=reel.description,
        emoji_cover=reel.emoji_cover,
        likes=0,
        is_liked=False,
        is_following=False,
        views="1",
        comments=[]
    )
    reels_db.insert(0, new_item)
    return new_item


@app.post("/api/reels/{reel_id}/like")
async def toggle_like_reel(reel_id: int):
    for reel in reels_db:
        if reel.id == reel_id:
            reel.is_liked = not reel.is_liked
            reel.likes += 1 if reel.is_liked else -1
            return {"id": reel.id, "likes": reel.likes, "is_liked": reel.is_liked}
    raise HTTPException(status_code=404, detail="Reel topilmadi")


@app.post("/api/reels/{reel_id}/follow")
async def toggle_follow_reel(reel_id: int):
    for reel in reels_db:
        if reel.id == reel_id:
            reel.is_following = not reel.is_following
            return {"id": reel.id, "is_following": reel.is_following}
    raise HTTPException(status_code=404, detail="Reel topilmadi")


@app.post("/api/reels/{reel_id}/comment", response_model=CommentModel)
async def add_comment_reel(reel_id: int, comment: NewCommentRequest):
    for reel in reels_db:
        if reel.id == reel_id:
            new_comment = CommentModel(
                id=random.randint(1000, 99999),
                author=comment.author or "Foydalanuvchi",
                avatar="🧑‍💻",
                text=comment.text,
                timestamp="Hozirgina"
            )
            reel.comments.append(new_comment)
            return new_comment
    raise HTTPException(status_code=404, detail="Reel topilmadi")


@app.post("/api/scan-fridge")
async def scan_fridge(file: UploadFile = File(...)):
    if not file.filename:
        raise HTTPException(status_code=400, detail="Rasm yuklanmadi")
    detected = random.choice(AI_FRIDGE_DETECTION_POOL)
    return {
        "status": "success",
        "ingredients": detected,
        "confidence": f"{random.randint(95, 99)}%"
    }