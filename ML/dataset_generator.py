import pandas as pd
import numpy as np

np.random.seed(42)

students = 100
attempts_per_student = 50

records = []

for student in range(1, students + 1):

    base_accuracy = np.random.uniform(0.75, 0.9)

    for attempt in range(attempts_per_student):

        accuracy = base_accuracy

        # simulate concept drift after 30 attempts
        if attempt > 30:
            accuracy -= np.random.uniform(0.2, 0.4)

        correct = np.random.choice([1, 0], p=[accuracy, 1 - accuracy])
        time_taken = np.random.normal(40, 8)
        retries = np.random.poisson(1)

        records.append([
            student,
            attempt,
            correct,
            abs(time_taken),
            retries
        ])

df = pd.DataFrame(records, columns=[
    "student_id",
    "attempt",
    "correct",
    "time_taken",
    "retries"
])

df.to_csv("student_interactions.csv", index=False)

print("Dataset generated: student_interactions.csv")