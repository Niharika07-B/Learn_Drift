import pandas as pd
from river.drift import PageHinkley

df = pd.read_csv("student_interactions.csv")

results = []

for student_id, group in df.groupby("student_id"):

    ph = PageHinkley(min_instances=30, delta=0.005, threshold=5)

    drift_points = []

    for i, value in enumerate(group["correct"]):
        ph.update(value)

        if ph.drift_detected:
            drift_points.append(i)

    if drift_points:
        print(f"Student {student_id} drift detected at attempts {drift_points[:3]}")

        results.append({
            "student_id": student_id,
            "drift_detected": True,
            "first_drift_point": drift_points[0]
        })