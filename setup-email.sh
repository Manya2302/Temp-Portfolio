#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Portfolio Contact Form Email Setup      ║${NC}"
echo -e "${BLUE}╔════════════════════════════════════════════╗${NC}"
echo ""

# Check if .env already exists
if [ -f .env ]; then
    echo -e "${YELLOW}⚠️  .env file already exists!${NC}"
    read -p "Do you want to overwrite it? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Setup cancelled. Your existing .env file was not modified."
        exit 0
    fi
fi

# Copy .env.example to .env
cp .env.example .env
echo -e "${GREEN}✅ Created .env file${NC}"
echo ""

# Prompt for Gmail address
echo -e "${BLUE}📧 Email Configuration${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
read -p "Enter your Gmail address: " gmail_address

# Prompt for App Password
echo ""
echo -e "${YELLOW}🔐 Gmail App Password Setup${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "To get your App Password:"
echo "1. Go to: https://myaccount.google.com/apppasswords"
echo "2. Select 'Mail' and 'Other (Custom name)'"
echo "3. Enter 'Portfolio Contact Form'"
echo "4. Copy the 16-character password"
echo ""
read -p "Enter your Gmail App Password: " app_password

# Update .env file
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' "s/SMTP_USER=.*/SMTP_USER=$gmail_address/" .env
    sed -i '' "s/SMTP_PASS=.*/SMTP_PASS=$app_password/" .env
    sed -i '' "s/RECIPIENT_EMAIL=.*/RECIPIENT_EMAIL=$gmail_address/" .env
else
    # Linux
    sed -i "s/SMTP_USER=.*/SMTP_USER=$gmail_address/" .env
    sed -i "s/SMTP_PASS=.*/SMTP_PASS=$app_password/" .env
    sed -i "s/RECIPIENT_EMAIL=.*/RECIPIENT_EMAIL=$gmail_address/" .env
fi

echo ""
echo -e "${GREEN}✅ Configuration complete!${NC}"
echo ""
echo -e "${BLUE}📋 Next Steps:${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1. Restart your development server: npm run dev"
echo "2. Test the contact form on your portfolio"
echo "3. Check your Gmail inbox for test emails"
echo ""
echo -e "${YELLOW}📖 For detailed instructions, see: EMAIL_SETUP_GUIDE.md${NC}"
echo ""
