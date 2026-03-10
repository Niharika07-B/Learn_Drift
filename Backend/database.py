from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URL = "mongodb+srv://saihemanth1106_db_user:7981740339Sh@cluster0.yvhapvn.mongodb.net/?appName=Cluster0"

client = AsyncIOMotorClient(MONGO_URL)

database = client.learndrift