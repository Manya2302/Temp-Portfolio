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
      
      let messageId = "no-db";
      
      // 1. Try to Save to Database (if configured)
      const mongoUrl = process.env.MONGODB_URL || process.env.DATABASE_URL;
      if (mongoUrl) {
        try {
          const message = await storage.createMessage(input);
          messageId = message.id;
          console.log(`💾 Message saved to database with ID: ${messageId}`);
        } catch (dbError) {
          console.error("⚠️  Failed to save to database:", dbError);
          console.log("📧 Continuing with email send...");
        }
      } else {
        console.log("⚠️  Database not configured - skipping message storage");
      }

      // 2. Send Email (if configured)
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
            from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
            replyTo: input.email,
            to: process.env.RECIPIENT_EMAIL || process.env.SMTP_USER,
            subject: `🔔 New Portfolio Contact: ${input.subject}`,
            text: `
══════════════════════════════════════════════════════════════
            NEW CONTACT FORM SUBMISSION
══════════════════════════════════════════════════════════════

Someone wants to reach you through your portfolio website!

📧 FROM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:     ${input.name}
Email:    ${input.email}

📝 SUBJECT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${input.subject}

💬 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${input.message}

══════════════════════════════════════════════════════════════
You can reply directly to this email to respond to ${input.name}
══════════════════════════════════════════════════════════════
            `,
            html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background-color: #ffffff;
      border: 2px solid #000;
      padding: 0;
      box-shadow: 4px 4px 0 #000;
    }
    .header {
      background-color: #000;
      color: #fff;
      padding: 20px;
      text-align: center;
      border-bottom: 2px solid #000;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .header p {
      margin: 10px 0 0;
      font-size: 14px;
      opacity: 0.9;
    }
    .content {
      padding: 30px;
    }
    .field {
      margin-bottom: 25px;
      border-left: 4px solid #000;
      padding-left: 15px;
    }
    .field-label {
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #666;
      margin-bottom: 8px;
      display: block;
    }
    .field-value {
      font-size: 16px;
      color: #000;
      word-wrap: break-word;
    }
    .message-box {
      background-color: #f9f9f9;
      border: 2px solid #000;
      padding: 20px;
      margin-top: 10px;
      white-space: pre-wrap;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      line-height: 1.6;
    }
    .footer {
      background-color: #f0f0f0;
      padding: 20px;
      text-align: center;
      border-top: 2px solid #000;
      font-size: 13px;
      color: #666;
    }
    .footer strong {
      color: #000;
    }
    .divider {
      height: 2px;
      background-color: #000;
      margin: 25px 0;
    }
    .highlight {
      background-color: #fff44f;
      padding: 2px 4px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 New Contact Request</h1>
      <p>Someone wants to reach you through your portfolio</p>
    </div>
    
    <div class="content">
      <div class="field">
        <span class="field-label">👤 Sender Name</span>
        <div class="field-value"><strong>${input.name}</strong></div>
      </div>
      
      <div class="field">
        <span class="field-label">📧 Email Address</span>
        <div class="field-value">
          <a href="mailto:${input.email}" style="color: #0066cc; text-decoration: none;">${input.email}</a>
        </div>
      </div>
      
      <div class="divider"></div>
      
      <div class="field">
        <span class="field-label">📝 Subject</span>
        <div class="field-value"><strong>${input.subject}</strong></div>
      </div>
      
      <div class="field">
        <span class="field-label">💬 Message</span>
        <div class="message-box">${input.message.replace(/\n/g, '<br/>')}</div>
      </div>
    </div>
    
    <div class="footer">
      <p><strong>💡 Quick Action:</strong> Reply directly to this email to respond to ${input.name}</p>
      <p style="margin-top: 15px; font-size: 12px; color: #999;">
        This message was sent from your portfolio contact form at ${new Date().toLocaleString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </p>
    </div>
  </div>
</body>
</html>
            `,
          });
          console.log(`✅ Email sent successfully for message ${messageId}`);
        } catch (emailError) {
          console.error("❌ Failed to send email:", emailError);
          return res.status(500).json({ 
            message: "Failed to send email notification. Please check SMTP configuration." 
          });
        }
      } else {
        console.log("⚠️  SMTP credentials missing, skipping email send.");
        console.log("📧 To enable emails, configure SMTP settings in .env file");
        console.log("📖 See EMAIL_SETUP_GUIDE.md for detailed instructions");
        return res.status(500).json({ 
          message: "Email service not configured. Please contact administrator." 
        });
      }

      res.status(200).json({ 
        success: true, 
        message: "Message sent successfully! We'll get back to you soon." 
      });
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
