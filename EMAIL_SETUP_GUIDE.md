# 📧 Contact Form Email Setup Guide

## Overview
Your portfolio contact form is now configured to send emails to your Gmail account when someone submits the form.

## 🔧 Setup Instructions

### Step 1: Create Gmail App Password

1. **Go to your Google Account Security Settings**
   - Visit: https://myaccount.google.com/security

2. **Enable 2-Step Verification** (if not already enabled)
   - Scroll to "How you sign in to Google"
   - Click "2-Step Verification" and follow the setup

3. **Generate App Password**
   - Visit: https://myaccount.google.com/apppasswords
   - Select app: **Mail**
   - Select device: **Other (Custom name)** → Enter "Portfolio Contact Form"
   - Click **Generate**
   - **Copy the 16-character password** (you won't see it again)

### Step 2: Configure Environment Variables

1. **Copy the example environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit the `.env` file** and update these values:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-actual-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   RECIPIENT_EMAIL=your-actual-email@gmail.com
   ```

### Step 3: Test the Setup

1. **Restart your development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to the Contact page** on your portfolio

3. **Fill out the form** with test data and submit

4. **Check your Gmail inbox** for the notification email

## 📨 Email Format

When someone submits the contact form, you'll receive an email with:

- **Subject:** 🔔 New Portfolio Contact: [Their Subject]
- **From:** Portfolio Contact Form
- **Reply-To:** The sender's email (so you can reply directly)

The email includes:
- Sender's Name
- Sender's Email
- Subject
- Full Message
- Timestamp

## 🎨 Email Design

The email is professionally formatted with:
- ✅ Clean HTML layout with brutalist design aesthetic
- ✅ Mobile-responsive design
- ✅ Clear section dividers
- ✅ Easy-to-read typography
- ✅ Direct reply capability

## 🔍 Troubleshooting

### Problem: Not receiving emails

**Check these things:**
1. ✅ Is 2-Step Verification enabled on your Google account?
2. ✅ Did you use an **App Password** (not your regular Gmail password)?
3. ✅ Are the credentials in `.env` correct?
4. ✅ Is the `.env` file in the root directory of your project?
5. ✅ Did you restart the server after creating/updating `.env`?

### Problem: "Invalid credentials" error

- Make sure you're using the **16-character App Password**, not your regular Gmail password
- Remove any spaces from the app password
- Verify the SMTP_USER email is correct

### Problem: Email goes to spam

- Add your portfolio domain to Gmail's trusted senders
- The reply-to address helps with deliverability
- First email might go to spam, mark it as "Not Spam"

### Problem: Server logs show "SMTP credentials missing"

- Your `.env` file is not being loaded
- Check if `.env` is in the correct location (root of project)
- Restart your development server

## 🔐 Security Notes

- ✅ Never commit `.env` file to Git (it's in `.gitignore`)
- ✅ Use App Passwords, not your main Gmail password
- ✅ Keep your credentials secure
- ✅ For production, consider using environment variables from your hosting provider

## 📊 What Happens When Form is Submitted

1. **Form Validation** → Frontend validates the data
2. **Send to Backend** → Data is sent to `/api/contact`
3. **Save to Database** → Message is stored in your database
4. **Send Email** → Email notification is sent to your Gmail
5. **Success Response** → User sees confirmation message

## 🚀 Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. **Add environment variables** in your hosting platform's dashboard
2. **Use the same variable names** from your `.env` file
3. **Test the contact form** after deployment

## 💡 Tips

- You can reply directly to contact form emails - the reply will go to the sender's email
- All messages are also saved to your database as a backup
- The email includes a timestamp for record-keeping
- Consider setting up email filters in Gmail to organize contact form submissions

## 🆘 Need Help?

If emails still aren't working:
1. Check server logs for error messages
2. Verify Gmail App Password is correct
3. Try creating a new App Password
4. Ensure 2-Step Verification is enabled

---

**Last Updated:** January 2026
