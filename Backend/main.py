from fastapi import FastAPI
from database import database

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
    