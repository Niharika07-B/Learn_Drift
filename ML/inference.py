import joblib
import pandas as pd

model = joblib.load("drift_model.pkl")

def predict_drift(accuracy, avg_time, retry_rate):

    X = pd.DataFrame([[accuracy, avg_time, retry_rate]],
                     columns=["accuracy_rate","avg_time","retry_rate"])

    prediction = model.predict(X)[0]

    drift_score = (1-accuracy)*0.5 + retry_rate*0.3 + (avg_time/80)*0.2

    status = "High Drift" if drift_score > 0.6 else "Normal"

    return {
        "drift_prediction": bool(prediction),
        "drift_score": round(drift_score,2),
        "status": status
    }

print(predict_drift(0.55,70,0.4))   