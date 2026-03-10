import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("../data/drift_scores.csv")

plt.figure(figsize=(10,5))

plt.scatter(df["student_id"], df["drift_score"],
            c=df["drift_score"],
            cmap="coolwarm")

plt.axhline(0.6, linestyle="--")

plt.xlabel("Student ID")
plt.ylabel("Drift Score")
plt.title("Concept Drift Detection")

plt.colorbar(label="Drift Severity")

plt.show()