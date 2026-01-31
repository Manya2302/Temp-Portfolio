#!/bin/bash

# Gmail App Password Verification Helper

echo "╔════════════════════════════════════════════════════════╗"
echo "║        Gmail App Password Troubleshooting              ║"
echo "╔════════════════════════════════════════════════════════╗"
echo ""

echo "Current Issue: Gmail authentication failing"
echo ""
echo "Common Causes:"
echo "1. ❌ App Password has spaces (should be removed)"
echo "2. ❌ Using regular Gmail password instead of App Password"
echo "3. ❌ 2-Step Verification not enabled"
echo "4. ❌ App Password was revoked or expired"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📝 How to Generate a New App Password:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Step 1: Enable 2-Step Verification (if not already enabled)"
echo "   → Go to: https://myaccount.google.com/security"
echo "   → Find '2-Step Verification' and turn it ON"
echo ""
echo "Step 2: Create App Password"
echo "   → Go to: https://myaccount.google.com/apppasswords"
echo "   → Select 'Mail' for app"
echo "   → Select 'Other' for device"
echo "   → Enter name: 'Portfolio Contact Form'"
echo "   → Click 'Generate'"
echo ""
echo "Step 3: Copy the 16-character password"
echo "   ⚠️  IMPORTANT: Copy it WITHOUT SPACES!"
echo "   Example: abcdexamplepass (16 characters, no spaces)"
echo ""
echo "Step 4: Update .env file"
echo "   → Open .env file"
echo "   → Replace SMTP_PASS value with new password (no spaces)"
echo "   → Save and restart server"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔍 Checking Current Configuration:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ -f .env ]; then
    SMTP_USER=$(grep SMTP_USER .env | cut -d '=' -f2)
    SMTP_PASS=$(grep SMTP_PASS .env | cut -d '=' -f2)
    
    echo "SMTP_USER: $SMTP_USER"
    
    if [ -z "$SMTP_PASS" ]; then
        echo "SMTP_PASS: ❌ NOT SET"
    else
        PASS_LENGTH=${#SMTP_PASS}
        HAS_SPACES=$(echo "$SMTP_PASS" | grep -c " ")
        
        echo "SMTP_PASS: ✓ SET (Length: $PASS_LENGTH characters)"
        
        if [ "$HAS_SPACES" -gt 0 ]; then
            echo "   ⚠️  WARNING: Password contains spaces! Remove them."
        fi
        
        if [ "$PASS_LENGTH" -ne 16 ]; then
            echo "   ⚠️  WARNING: App passwords are usually 16 characters"
        fi
    fi
else
    echo "❌ .env file not found"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔄 After updating .env:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1. Save the .env file"
echo "2. Restart server: npm run dev"
echo "3. Test contact form again"
echo ""
