import pandas as pd

# load dataset
df = pd.read_csv("../data/student_interactions.csv")

# remove negative times if any
df["time_taken"] = df["time_taken"].abs()

# fill missing values
df.fillna(0, inplace=True)

# remove duplicates
df.drop_duplicates(inplace=True)

# save cleaned dataset
df.to_csv("cleaned_interactions.csv", index=False)

print("Preprocessing completed")
print(df.head())