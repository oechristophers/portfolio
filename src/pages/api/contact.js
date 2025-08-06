import nodemailer from "nodemailer";

// Rate limiting store (in production, use Redis or a database)
const rateLimitStore = new Map();

// Simple rate limiting function
function rateLimit(ip, limit = 5, windowMs = 15 * 60 * 1000) {
  // 5 requests per 15 minutes
  const now = Date.now();
  const windowStart = now - windowMs;

  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, []);
  }

  const requests = rateLimitStore.get(ip);
  // Remove old requests outside the window
  const recentRequests = requests.filter((time) => time > windowStart);

  if (recentRequests.length >= limit) {
    return false;
  }

  recentRequests.push(now);
  rateLimitStore.set(ip, recentRequests);
  return true;
}

// Input validation
function validateInput(name, email, message) {
  const errors = [];

  if (!name || name.trim().length < 2 || name.trim().length > 100) {
    errors.push("Name must be between 2 and 100 characters");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push("Please provide a valid email address");
  }

  if (!message || message.trim().length < 10 || message.trim().length > 1000) {
    errors.push("Message must be between 10 and 1000 characters");
  }

  // Check for potential spam patterns
  const spamKeywords = [
    "viagra",
    "casino",
    "lottery",
    "winner",
    "congratulations",
  ];
  const lowerMessage = message.toLowerCase();
  const hasSpam = spamKeywords.some((keyword) =>
    lowerMessage.includes(keyword)
  );
  if (hasSpam) {
    errors.push("Message contains inappropriate content");
  }

  return errors;
}

// Sanitize input to prevent XSS
function sanitizeInput(input) {
  if (typeof input !== "string") return input;
  return input
    .replace(/[<>]/g, "") // Remove < and >
    .trim()
    .substring(0, 1000); // Limit length
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Get client IP for rate limiting
    const clientIp =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      "unknown";

    // Apply rate limiting
    if (!rateLimit(clientIp)) {
      return res.status(429).json({
        error: "Too many requests. Please try again later.",
      });
    }

    const { name, email, message } = req.body;

    // Validate input
    const validationErrors = validateInput(name, email, message);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        error: "Validation failed",
        details: validationErrors,
      });
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password (not regular password)
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify connection configuration
    console.log("Attempting to verify email configuration...");
    try {
      await transporter.verify();
      console.log("Email server connection verified successfully");
    } catch (verifyError) {
      console.error("Email verification failed:", verifyError);
      throw new Error("Email service configuration error");
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `Portfolio Contact Form - Message from ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #4f46e5; margin-top: 10px;">
              ${sanitizedMessage.replace(/\n/g, "<br>")}
            </div>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #e5e7eb; border-radius: 8px;">
            <p style="margin: 0; font-size: 12px; color: #6b7280;">
              <strong>Timestamp:</strong> ${new Date().toLocaleString()}<br>
              <strong>Client IP:</strong> ${clientIp}
            </p>
          </div>
        </div>
      `,
      // Reply-to the sender's email for easy response
      replyTo: sanitizedEmail,
    };

    // Send email
    console.log("Attempting to send email...");
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    // Success response
    res.status(200).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    // Provide more specific error messages
    let errorMessage = "Failed to send message. Please try again later.";

    if (error.code === "ESOCKET" || error.code === "ETIMEDOUT") {
      errorMessage =
        "Email service temporarily unavailable. Please try again later.";
    } else if (error.code === "EAUTH") {
      errorMessage = "Email authentication failed. Please contact support.";
    } else if (error.message === "Email service configuration error") {
      errorMessage =
        "Email service is currently unavailable. Please try again later.";
    }

    res.status(500).json({
      error: errorMessage,
    });
  }
}
