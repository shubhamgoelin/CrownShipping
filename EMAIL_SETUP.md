# Contact Form Email Setup

The contact form is now configured to send emails using **Web3Forms** (free service).

## Setup Instructions:

### Step 1: Get Your Free API Key
1. Go to https://web3forms.com/
2. Enter your email address: **info@crownpackingshipping.com** (or any email where you want to receive form submissions)
3. Click "Get Access Key"
4. Check your email and copy the access key

### Step 2: Update the Form
1. Open `contact.html`
2. Find this line (around line 169):
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key from Step 1

### Step 3: Test the Form
1. Deploy your website
2. Fill out the contact form
3. Submit it
4. You should receive an email at the address you registered with Web3Forms

## Alternative: Use Formspree (Another Free Option)

If you prefer Formspree instead:

1. Go to https://formspree.io/
2. Sign up with your email
3. Create a new form
4. Copy the form endpoint URL
5. In `contact.html`, change the form action:
   ```html
   <form id="contactForm" action="YOUR_FORMSPREE_ENDPOINT" method="POST">
   ```
6. Remove the Web3Forms hidden inputs

## Alternative: Use Google Forms

For the simplest solution:
1. Create a Google Form
2. Use a service like https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server
3. Or use Google Apps Script to forward form data to email

## Need Help?

Contact the developer or use one of these services:
- Web3Forms: https://web3forms.com/
- Formspree: https://formspree.io/
- EmailJS: https://www.emailjs.com/
