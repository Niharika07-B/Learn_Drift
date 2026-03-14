import joblib
import pandas as pd

model = joblib.load("drift_model.pkl")

data = pd.read_csv("../data/student_features.csv")

X = data[[
    "accuracy_rate",
    "avg_time",
    "retry_rate"
]]

predictions = model.predict(X)

data["drift_prediction"] = predictions

data.to_csv("drift_predictions.csv", index=False)

print(data.head())