import { MongoClient, type Db, type Collection } from "mongodb";
import type { Message } from "@shared/schema";

const mongoUrl = process.env.MONGODB_URL || process.env.DATABASE_URL;

let client: MongoClient | null = null;

if (mongoUrl) {
  client = new MongoClient(mongoUrl);
  console.log("✅ MongoDB connection configured");
} else {
  console.log("⚠️  MongoDB not configured - messages will only be emailed, not saved to database");
}

let cachedDb: Db | null = null;
let cachedMessages: Collection<Message> | null = null;

export async function getMongoCollections() {
  if (!mongoUrl || !client) {
    throw new Error("MongoDB is not configured");
  }

  if (!cachedDb) {
    await client.connect();
    const dbName = process.env.MONGODB_DB;
    cachedDb = dbName ? client.db(dbName) : client.db();
    cachedMessages = cachedDb.collection<Message>("messages");
  }

  return {
    db: cachedDb,
    messages: cachedMessages!,
  };
}
