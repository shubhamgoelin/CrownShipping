# Contact Form Email Setup - Crown Packing And Shipping

The contact form is configured to send emails to: **crownshippingnoida@gmail.com**

## 🚀 Quick Setup (5 minutes)

### Option 1: Web3Forms (Recommended - FREE)

1. **Get Your Free Access Key:**
   - Visit: https://web3forms.com/
   - Enter email: **crownshippingnoida@gmail.com**
   - Click "Create Access Key"
   - Check your email inbox for the access key

2. **Update the Form:**
   - Open `contact.html` (line 171)
   - Find: `value="YOUR_WEB3FORMS_ACCESS_KEY"`
   - Replace with your actual access key
   - Save the file

3. **Deploy and Test:**
   - Push to GitHub
   - Deploy to Vercel
   - Test the form - you'll receive emails at crownshippingnoida@gmail.com

**Benefits:**
- ✅ 100% Free forever
- ✅ No API limits
- ✅ Spam protection included
- ✅ Works immediately after setup

---

### Option 2: Formspree (Alternative - FREE)

1. Go to https://formspree.io/
2. Sign up with: **crownshippingnoida@gmail.com**
3. Create a new form
4. Copy your form endpoint (e.g., `https://formspree.io/f/xxxxxxxx`)
5. In `contact.html`, replace line 170:
   ```html
   <form id="contactForm" action="YOUR_FORMSPREE_ENDPOINT" method="POST">
   ```
6. Remove lines 171-176 (Web3Forms hidden inputs)

---

### Option 3: EmailJS (FREE with 200 emails/month)

1. Visit https://www.emailjs.com/
2. Sign up and connect Gmail: crownshippingnoida@gmail.com
3. Follow their integration guide
4. Update JavaScript in `js/main.js`

---

## 📧 Email Configuration Done ✅

All email addresses in the website have been updated to:
- **crownshippingnoida@gmail.com**

Updated in:
- Top bar (all pages)
- Contact page
- Footer (all pages)
- Schema.org markup
- All mailto: links

---

## 🆘 Need Help?

**Quick Support:**
- Web3Forms Docs: https://docs.web3forms.com/
- Formspree Docs: https://help.formspree.io/

**Your Current Setup:**
- Email: crownshippingnoida@gmail.com
- Form: contact.html (line 170-176)
- Handler: js/main.js (line 45-92)

Just get the Web3Forms access key and replace it in contact.html - that's it!
