# Contact Form Setup Guide

The contact form has been configured to use a Vercel serverless function with Gmail SMTP for sending emails.

## Prerequisites

- A Gmail account
- Gmail App Password (for secure SMTP access)

## Setup Steps

### 1. Create Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** (if not already enabled)
4. Go to **App Passwords**: https://myaccount.google.com/apppasswords
5. Generate a new App Password:
   - Select app: **Mail**
   - Select device: **Other (Custom name)** - e.g., "BeFound Studio Website"
6. Copy the 16-character password (no spaces)

### 2. Configure Environment Variables

Create a `.env` file in the project root (already in .gitignore):

```env
# Gmail Configuration for Contact Form
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-16-character-app-password

# Contact form recipient email
CONTACT_EMAIL=info@befound.dev
```

**Important:** Replace the values with your actual credentials.

### 3. Deploy to Vercel

#### Option A: Deploy via Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### Option B: Deploy via GitHub Integration

1. Push your code to GitHub
2. Import the repository in Vercel Dashboard
3. Add environment variables in Vercel Project Settings:
   - `GMAIL_USER`
   - `GMAIL_PASS`
   - `CONTACT_EMAIL`

### 4. Test the Contact Form

1. Visit your deployed site
2. Navigate to the Contact page
3. Fill out the form and submit
4. Check:
   - Your configured email for the notification
   - The sender's email for the auto-reply

## How It Works

### API Endpoint: `/api/contact.js`

- **Method:** POST
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "company": "Acme Inc",
    "services": ["Website Design", "SEO"],
    "message": "I'm interested in your services..."
  }
  ```

### Email Flow

1. **User submits form** → Frontend sends POST request to `/api/contact`
2. **API validates data** → Checks required fields (name, email, services, message)
3. **Two emails sent:**
   - **Notification email** → Sent to `CONTACT_EMAIL` with full submission details
   - **Auto-reply email** → Sent to the user confirming receipt
4. **Success response** → Form displays success message and resets

### Features

✅ **Validation:** Client-side (React Hook Form + Zod) and server-side validation  
✅ **Auto-reply:** Users receive confirmation email immediately  
✅ **Professional formatting:** HTML-formatted emails with styling  
✅ **Error handling:** Graceful error messages with retry capability  
✅ **CORS support:** Configured for cross-origin requests  
✅ **Serverless:** Runs on Vercel Edge Functions (no server management)

## Local Development

To test locally with Vercel Dev:

```bash
# Install Vercel CLI
npm i -g vercel

# Run locally
vercel dev
```

This will start a local server that simulates the Vercel environment and allows you to test the serverless function.

## Troubleshooting

### Email Not Sending

1. **Check Gmail App Password:**
   - Make sure it's a 16-character App Password (not your regular password)
   - Ensure 2FA is enabled on your Google account

2. **Check Environment Variables:**
   - Verify `.env` file exists in project root
   - Verify variables are set in Vercel Dashboard (for production)

3. **Check Console Logs:**
   - In Vercel Dashboard → Your Project → Functions → Logs
   - Look for error messages from the contact function

### CORS Errors

The API is configured to allow all origins (`*`). If you need to restrict:

```javascript
res.setHeader('Access-Control-Allow-Origin', 'https://yourdomain.com');
```

### Rate Limiting

Consider adding rate limiting to prevent spam:

```bash
npm install express-rate-limit
```

## Security Notes

- ✅ `.env` is in `.gitignore` (credentials never committed)
- ✅ App Password used (not main Gmail password)
- ✅ Server-side validation prevents malicious input
- ⚠️ Consider adding reCAPTCHA for production
- ⚠️ Consider rate limiting for spam prevention

## Support

If you encounter issues:
1. Check Vercel Function Logs
2. Verify Gmail settings
3. Test with `vercel dev` locally
4. Review error messages in browser console

---

**Last Updated:** 2025-02-12  
**Vercel Serverless Function:** Ready ✅
