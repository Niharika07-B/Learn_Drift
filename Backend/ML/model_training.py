import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

df = pd.read_csv("../data/student_features.csv")

# create drift label
df["drift"] = df["accuracy_rate"] < 0.6

X = df[["accuracy_rate", "avg_time", "retry_rate"]]
y = df["drift"]

model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(X, y)

joblib.dump(model, "drift_model.pkl")

print("Model trained and saved as drift_model.pkl")