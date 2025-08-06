# Contact Form Setup Guide

## Overview

Your contact form now has full functionality with security measures including:

- Form validation (client & server-side)
- Rate limiting (5 requests per 15 minutes per IP)
- Input sanitization to prevent XSS attacks
- Spam detection
- Email notifications via Nodemailer

## Setup Instructions

### 1. Install Dependencies

The required dependencies should already be installed, but if needed:

```bash
npm install nodemailer
```

### 2. Configure Email Settings

#### Option A: Using Gmail (Recommended)

1. **Enable 2-Step Verification** on your Google account
2. **Generate an App Password**:

   - Go to Google Account settings → Security
   - Under "Signing in to Google," select 2-Step Verification
   - At the bottom, select "App passwords"
   - Generate a password for "Mail"
   - Copy the 16-character password

3. **Create `.env.local` file** in your project root:

```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

#### Option B: Using Other Email Providers

For Outlook/Hotmail, update the API route to use:

```javascript
service: "hotmail";
```

For custom SMTP providers, replace the service configuration with:

```javascript
host: process.env.SMTP_HOST,
port: process.env.SMTP_PORT,
secure: process.env.SMTP_SECURE === 'true',
```

### 3. Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email for the message

## Security Features

### Rate Limiting

- **Limit**: 5 requests per IP per 15-minute window
- **Storage**: In-memory (for production, consider Redis)
- **Response**: 429 status code when limit exceeded

### Input Validation

- **Name**: 2-100 characters
- **Email**: Valid email format required
- **Message**: 10-1000 characters
- **Spam Detection**: Blocks common spam keywords

### Input Sanitization

- Removes HTML tags (`<` and `>`)
- Trims whitespace
- Limits input length
- Prevents XSS attacks

### Error Handling

- Network errors are caught and displayed
- Server errors return generic messages
- Validation errors show specific issues

## Customization

### Email Template

Edit the `mailOptions.html` in `/pages/api/contact.js` to customize the email format.

### Rate Limiting

Adjust limits in the `rateLimit` function:

```javascript
rateLimit(clientIp, 10, 30 * 60 * 1000); // 10 requests per 30 minutes
```

### Spam Detection

Add/remove keywords in the `spamKeywords` array:

```javascript
const spamKeywords = ["viagra", "casino", "lottery", "winner"];
```

### Styling

The form includes error states and loading indicators. Customize the classes in `contact-me.jsx`.

## Production Considerations

### Environment Variables

In production, set these environment variables:

- `EMAIL_USER`: Your email address
- `EMAIL_PASS`: Your email app password

### Rate Limiting

For production, consider using Redis for rate limiting:

```bash
npm install redis
```

### Email Service

For high-volume applications, consider:

- SendGrid
- AWS SES
- Mailgun
- Postmark

### Security Headers

Add security headers in `next.config.js`:

```javascript
module.exports = {
  headers: [
    {
      source: "/api/contact",
      headers: [
        {
          key: "X-RateLimit-Limit",
          value: "5",
        },
      ],
    },
  ],
};
```

## Troubleshooting

### Common Issues

1. **"Authentication failed"**

   - Verify 2-Step Verification is enabled
   - Use App Password, not regular password
   - Check EMAIL_USER and EMAIL_PASS values

2. **"Connection refused"**

   - Check internet connection
   - Verify email provider settings
   - Try different port (587, 465, 25)

3. **Rate limit errors**

   - Wait 15 minutes before retrying
   - Check if multiple requests are being sent

4. **Form not submitting**
   - Check browser console for errors
   - Verify API route is accessible
   - Check network tab for request details

### Testing

Test with different scenarios:

- Valid form submission
- Invalid email format
- Empty fields
- Very long messages
- Multiple rapid submissions (rate limiting)

## File Structure

```
/pages/api/contact.js          # API endpoint
/pages/contact-me.jsx          # Contact form component
/components/SimpleModal.jsx    # Success modal
/.env.local                    # Environment variables (don't commit)
/.env.example                  # Example environment file
```

Your contact form is now fully functional and secure! 🎉
