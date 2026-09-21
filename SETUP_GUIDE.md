# 📧📱 Email + WhatsApp Integration Setup Guide

## Overview
When a customer submits the contact form, they will receive notifications on:
- ✉️ **Email:** crownshippingnoida@gmail.com
- 📱 **WhatsApp:** +91 9953900400

---

## 🚀 Quick Setup (10 minutes)

### Step 1: Setup Email (Web3Forms - FREE)

1. **Get Access Key:**
   - Go to: https://web3forms.com/
   - Enter: **crownshippingnoida@gmail.com**
   - Click "Create Access Key"
   - Check your email and copy the key

2. **Update Form:**
   - Open `js/main.js`
   - Find line ~78: `emailData.append('access_key', 'YOUR_WEB3FORMS_KEY_HERE');`
   - Replace with your actual key
   - Save file

---

### Step 2: Setup WhatsApp (CallMeBot - FREE)

1. **Get API Key:**
   - Save this number to your phone: **+34 644 44 53 67**
   - Send a WhatsApp message: **I allow callmebot to send me messages**
   - You'll receive a message with your API key

2. **Update Form:**
   - Open `js/main.js`
   - Find line ~86: `apikey=YOUR_CALLMEBOT_API_KEY`
   - Replace with your actual API key
   - Make sure the phone number is correct: `919953900400`

---

## 📋 Alternative Options

### Option A: Use Make.com (Recommended for Advanced Features)

**Best for:** Multiple WhatsApp numbers, custom workflows, database logging

1. **Create Free Account:**
   - Visit: https://www.make.com/en/register
   - Sign up (free tier: 1,000 operations/month)

2. **Create Scenario:**
   - Click "Create a new scenario"
   - Add trigger: "Webhooks" → "Custom webhook"
   - Copy the webhook URL

3. **Configure Actions:**
   - Add action 1: "Email" → "Send an email"
   - Add action 2: "WhatsApp" → "Send a message" (requires WhatsApp Business API)
   - Or use "HTTP" module to call WhatsApp API

4. **Update Form:**
   - In `js/main.js`, replace the fetch calls with your Make.com webhook URL

**Setup Code:**
```javascript
// Add this to js/main.js after line 67
const makeWebhook = 'YOUR_MAKE_COM_WEBHOOK_URL';
await fetch(makeWebhook, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

---

### Option B: Use Pabbly Connect (Free Alternative)

**Free tier:** 100 tasks/month

1. Visit: https://www.pabbly.com/connect/
2. Create automation similar to Make.com
3. Connect Email + WhatsApp Business API
4. Use webhook URL in your form

---

### Option C: Use WATI.io (WhatsApp Business API - FREE tier)

**Best for:** Professional WhatsApp messaging with templates

1. **Sign Up:**
   - Visit: https://wati.io/
   - Create free account
   - Connect WhatsApp Business number

2. **Get API Credentials:**
   - Go to Dashboard → API Docs
   - Copy your API key and endpoint

3. **Update Code:**
```javascript
// Replace WhatsApp API call in js/main.js
const watiAPI = 'https://live-server-YOUR_ID.wati.io/api/v1/sendSessionMessage/';
await fetch(watiAPI + '919953900400', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_WATI_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    messageText: formattedMessage
  })
});
```

---

## 🔧 How It Works

### Current Setup:
1. User fills contact form
2. JavaScript validates the data
3. Sends to Web3Forms (email)
4. Sends to CallMeBot (WhatsApp)
5. User sees success message

### Message Format:
```
🎯 NEW QUOTE REQUEST - Crown Packing

👤 Customer Details:
Name: John Doe
Phone: 9876543210
Email: john@example.com

📦 Moving Details:
From: Noida Sector 62
To: Greater Noida
Service: Home Shifting
Date: 2024-02-15
Property: 2 BHK

💬 Message:
Need packing for fragile items

⏰ Submitted: 15/01/2024, 10:30 AM
```

---

## ✅ Testing

1. **Test Email:**
   - Submit form on contact page
   - Check: crownshippingnoida@gmail.com
   - Email should arrive within 1 minute

2. **Test WhatsApp:**
   - Submit form
   - Check WhatsApp on +91 9953900400
   - Message should arrive within 30 seconds

---

## 🆘 Troubleshooting

### Email not working:
- ✓ Check Web3Forms access key is correct
- ✓ Check spam folder in Gmail
- ✓ Verify email in Web3Forms dashboard

### WhatsApp not working:
- ✓ Make sure you completed CallMeBot activation
- ✓ Check API key is correct
- ✓ Verify phone number format: 919953900400 (no + or spaces)
- ✓ Check CallMeBot rate limits (not too many messages)

### Alternative if CallMeBot doesn't work:
- Use Make.com or Pabbly Connect (more reliable)
- Use WATI.io for professional WhatsApp Business
- Use Twilio (paid but very reliable)

---

## 💰 Cost Comparison

| Service | Free Tier | Paid Plans | Best For |
|---------|-----------|------------|----------|
| Web3Forms | ✅ Unlimited | Free forever | Email only |
| CallMeBot | ✅ Limited | Donations | Basic WhatsApp |
| Make.com | 1,000 ops/month | $9+/month | Advanced automation |
| Pabbly Connect | 100 tasks/month | $19+/month | Budget automation |
| WATI.io | ✅ Basic | $49+/month | Professional WhatsApp |
| Twilio | Pay per use | $0.005/SMS | Enterprise reliability |

---

## 📝 Files to Update

After getting your API keys, update these:

1. **js/main.js** (line ~78):
   ```javascript
   emailData.append('access_key', 'YOUR_WEB3FORMS_KEY');
   ```

2. **js/main.js** (line ~86):
   ```javascript
   apikey=YOUR_CALLMEBOT_API_KEY
   ```

3. **Deploy to GitHub:**
   ```bash
   git add .
   git commit -m "Configure email and WhatsApp integration"
   git push origin main
   ```

---

## 🎯 Current Configuration

- **Email:** crownshippingnoida@gmail.com
- **WhatsApp:** +91 9953900400
- **Form:** contact.html
- **Handler:** js/main.js (line 45-120)
- **Backup:** Users can also call directly or use floating buttons

---

## 🌟 Pro Tips

1. **Test thoroughly** before going live
2. **Monitor email spam** folder for first few submissions
3. **Set up email forwarding** rules in Gmail if needed
4. **Create WhatsApp quick replies** for faster responses
5. **Use Make.com** for advanced features like:
   - Sending to multiple WhatsApp numbers
   - Storing in Google Sheets
   - Creating calendar events
   - Auto-replies

---

## Support

- Web3Forms: https://docs.web3forms.com/
- CallMeBot: https://www.callmebot.com/blog/free-api-whatsapp-messages/
- Make.com: https://www.make.com/en/help/

**Need help?** Contact your developer or check the documentation links above.
