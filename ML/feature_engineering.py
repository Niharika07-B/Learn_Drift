import pandas as pd

df = pd.read_csv("../data/cleaned_interactions.csv")

features = df.groupby("student_id").agg({
    "correct": "mean",
    "time_taken": "mean",
    "retries": "mean"
}).reset_index()

features.rename(columns={
    "correct": "accuracy_rate",
    "time_taken": "avg_time",
    "retries": "retry_rate"
}, inplace=True)

features.to_csv("student_features.csv", index=False)

print("Feature dataset created: student_features.csv")
print(features.head())