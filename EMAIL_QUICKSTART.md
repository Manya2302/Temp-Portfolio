# 📧 Contact Form Email - Quick Start

## ⚡ Quick Setup (3 Steps)

### Option 1: Automated Setup
```bash
./setup-email.sh
```

### Option 2: Manual Setup

1. **Copy environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Get Gmail App Password:**
   - Visit: https://myaccount.google.com/apppasswords
   - Create password for "Mail"
   - Copy the 16-character code

3. **Edit `.env` file:**
   ```env
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-password
   RECIPIENT_EMAIL=your-email@gmail.com
   ```

4. **Restart server:**
   ```bash
   npm run dev
   ```

## 📨 What You'll Receive

When someone submits the contact form, you'll get an email like this:

```
From: Portfolio Contact Form
To: your-email@gmail.com
Subject: 🔔 New Portfolio Contact: [Their Subject]

══════════════════════════════════════════
         NEW CONTACT FORM SUBMISSION
══════════════════════════════════════════

Someone wants to reach you through your portfolio!

📧 FROM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:     John Doe
Email:    john@example.com

📝 SUBJECT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Project Collaboration Opportunity

💬 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hi, I'm interested in discussing a potential
collaboration on an AI project...

══════════════════════════════════════════
You can reply directly to respond to John Doe
══════════════════════════════════════════
```

## ✅ Features

- ✅ Professional HTML email template
- ✅ Reply directly to sender
- ✅ Saves to database as backup
- ✅ Mobile-responsive design
- ✅ Timestamp included
- ✅ Brutalist design aesthetic

## 🔍 Testing

1. Fill out contact form on your portfolio
2. Submit the form
3. Check your Gmail inbox
4. Try replying to test reply-to functionality

## 📚 Documentation

For detailed instructions, see: [EMAIL_SETUP_GUIDE.md](./EMAIL_SETUP_GUIDE.md)

## 🆘 Problems?

**Not receiving emails?**
- Check `.env` file has correct credentials
- Verify you're using App Password (not regular password)
- Restart the server after editing `.env`
- Check server console for error messages

**Need help?**
- See troubleshooting section in EMAIL_SETUP_GUIDE.md
- Check server logs for detailed error messages
