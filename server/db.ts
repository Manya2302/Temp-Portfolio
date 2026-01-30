import { MongoClient, type Db, type Collection } from "mongodb";
import type { Message } from "@shared/schema";

const mongoUrl = process.env.MONGODB_URL || process.env.DATABASE_URL;

if (!mongoUrl) {
  throw new Error(
    "MONGODB_URL must be set. Did you forget to provision a database?",
  );
}

const client = new MongoClient(mongoUrl);

let cachedDb: Db | null = null;
let cachedMessages: Collection<Message> | null = null;

export async function getMongoCollections() {
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
