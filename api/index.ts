import express, { type Request, Response } from "express";
import { z } from "zod";
import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Contact form API route
app.post("/api/contact", async (req, res) => {
  try {
    // Validate input
    const input = contactSchema.parse(req.body);
    
    let messageId = "no-db";
    
    // Try to save to MongoDB (if configured)
    const mongoUrl = process.env.MONGODB_URL || process.env.DATABASE_URL;
    if (mongoUrl) {
      try {
        const client = new MongoClient(mongoUrl);
        await client.connect();
        const db = client.db(process.env.MONGODB_DB || "portfolio");
        const messages = db.collection("messages");
        
        const result = await messages.insertOne({
          ...input,
          createdAt: new Date(),
        });
        
        messageId = result.insertedId.toString();
        await client.close();
        console.log(`💾 Message saved with ID: ${messageId}`);
      } catch (dbError) {
        console.error("⚠️ Database error:", dbError);
      }
    }

    // Send email (if configured)
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "587"),
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
          replyTo: input.email,
          to: process.env.RECIPIENT_EMAIL || process.env.SMTP_USER,
          subject: `New Contact: ${input.subject}`,
          text: `From: ${input.name} (${input.email})\n\nSubject: ${input.subject}\n\nMessage:\n${input.message}`,
          html: `<h2>New Contact Form Submission</h2><p><strong>From:</strong> ${input.name} (${input.email})</p><p><strong>Subject:</strong> ${input.subject}</p><p><strong>Message:</strong></p><p>${input.message}</p>`,
        });

        console.log("✅ Email sent successfully");
      } catch (emailError) {
        console.error("❌ Email error:", emailError);
      }
    }

    return res.status(200).json({
      success: true,
      message: "Message received successfully!",
      messageId,
    });
  } catch (error: any) {
    console.error("Error:", error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: error.errors[0].message,
        field: error.errors[0].path.join('.'),
      });
    }
    
    return res.status(500).json({
      success: false,
      message: "Failed to process your message. Please try again.",
    });
  }
});

// Serve static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, "..", "dist", "public");

app.use(express.static(publicPath));

// Handle client-side routing
app.get("*", (_req: Request, res: Response) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

export default app;
