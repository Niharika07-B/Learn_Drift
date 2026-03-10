from fastapi import FastAPI
from database import database

import sys
import os
sys.path.append(os.path.abspath("../ML"))

from inference import predict_drift

app = FastAPI()

@app.get("/")
def home():
    return {"message": "LearnDrift Backend Running"}


@app.post("/students")
async def add_student(name: str):

    student = {"name": name}

    result = await database.students.insert_one(student)

    return {"student_id": str(result.inserted_id)}


@app.post("/interaction")
async def add_interaction(student_id: str, correct: int, time_taken: float):

    interaction = {
        "student_id": student_id,
        "correct": correct,
        "time_taken": time_taken
    }

    await database.interactions.insert_one(interaction)

    return {"status": "interaction stored"}


@app.post("/predict-drift")
async def predict_drift_api(accuracy_rate: float, avg_time: float, retry_rate: float):

    result = predict_drift(accuracy_rate, avg_time, retry_rate)

    return result