import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      
      // 1. Save to Database
      const message = await storage.createMessage(input);

      // 2. Send Email (if configured)
      // We check for credentials. If missing, we log and skip (development mode behavior)
      if (process.env.SMTP_HOST && process.env.SMTP_USER) {
        try {
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
          });

          await transporter.sendMail({
            from: `"${input.name}" <${process.env.SMTP_USER}>`, // Sender address (often must be authenticated user)
            replyTo: input.email,
            to: process.env.SMTP_USER, // Send to self
            subject: `Portfolio Contact: ${input.subject}`,
            text: `
Name: ${input.name}
Email: ${input.email}
Subject: ${input.subject}

Message:
${input.message}
            `,
            html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${input.name}</p>
<p><strong>Email:</strong> ${input.email}</p>
<p><strong>Subject:</strong> ${input.subject}</p>
<hr/>
<p>${input.message.replace(/\n/g, '<br/>')}</p>
            `,
          });
          console.log(`Email sent for message ${message.id}`);
        } catch (emailError) {
          console.error("Failed to send email:", emailError);
          // We don't fail the request if email fails, but we log it. 
          // Real-world: might want to alert user or retry.
        }
      } else {
        console.log("SMTP credentials missing, skipping email send. Message saved to DB.");
      }

      res.status(200).json({ success: true, message: "Message received successfully" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      console.error("Contact form error:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
