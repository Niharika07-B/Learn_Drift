import pandas as pd

df = pd.read_csv("student_features.csv")

df["drift_score"] = (
    (1 - df["accuracy_rate"]) * 0.5 +
    (df["retry_rate"] * 0.3) +
    ((df["avg_time"] / df["avg_time"].max()) * 0.2)
)

df["drift_status"] = df["drift_score"].apply(
    lambda x: "High Drift" if x > 0.6 else "Normal"
)

df.to_csv("drift_scores.csv", index=False)

print(df.head())