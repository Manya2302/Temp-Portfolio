import type { Message, type InsertMessage } from "@shared/schema";
import { getMongoCollections } from "./db";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const { messages } = await getMongoCollections();
    const createdAt = new Date();
    const result = await messages.insertOne({
      ...insertMessage,
      createdAt,
    } as Message);

    return {
      id: result.insertedId.toString(),
      ...insertMessage,
      createdAt,
    };
  }
}

export const storage = new DatabaseStorage();
