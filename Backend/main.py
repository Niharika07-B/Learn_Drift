from fastapi import FastAPI
from database import database

app = FastAPI()

@app.get("/")
def home():
    return {"message": "LearnDrift Backend Running"}

@app.get("/test-db")
async def test_db():

    data = {"message": "database connected"}

    await database.test.insert_one(data)

    return {"status": "data inserted"}
@app.post("/students")
async def add_student(name: str):

    student = {
        "name": name
    }

    result = await database.students.insert_one(student)

    return {
        "student_id": str(result.inserted_id),
        "message": "Student added"
    }
@app.post("/interaction")
async def add_interaction(student_id: str, correct: int, time_taken: float):

    interaction = {
        "student_id": student_id,
        "correct": correct,
        "time_taken": time_taken
    }

    await database.interactions.insert_one(interaction)

    return {"message": "interaction stored"}
@app.get("/drift/{student_id}")
async def get_drift(student_id: str):

    drift_score = 0.72

    return {
        "student_id": student_id,
        "drift_score": drift_score,
        "status": "Possible concept drift"
    }