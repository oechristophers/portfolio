import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    console.log("Testing email configuration...");
    console.log("EMAIL_USER:", process.env.EMAIL_USER ? "Set" : "Not set");
    console.log(
      "EMAIL_PASS:",
      process.env.EMAIL_PASS
        ? "Set (length: " + process.env.EMAIL_PASS.length + ")"
        : "Not set"
    );

    // Test different configurations
    const configs = [
      {
        name: "Gmail SMTP (587)",
        config: {
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
          tls: {
            rejectUnauthorized: false,
          },
        },
      },
      {
        name: "Gmail SMTP (465)",
        config: {
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
          tls: {
            rejectUnauthorized: false,
          },
        },
      },
      {
        name: "Gmail Service",
        config: {
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        },
      },
    ];

    const results = [];

    for (const { name, config } of configs) {
      try {
        console.log(`Testing ${name}...`);
        const transporter = nodemailer.createTransport(config);
        await transporter.verify();
        results.push({ name, status: "SUCCESS" });
        console.log(`${name}: SUCCESS`);
      } catch (error) {
        results.push({
          name,
          status: "FAILED",
          error: error.message,
          code: error.code,
        });
        console.log(`${name}: FAILED -`, error.message);
      }
    }

    res.status(200).json({
      message: "Email configuration test completed",
      results,
      environment: {
        hasEmailUser: !!process.env.EMAIL_USER,
        hasEmailPass: !!process.env.EMAIL_PASS,
        emailUserLength: process.env.EMAIL_USER?.length || 0,
        emailPassLength: process.env.EMAIL_PASS?.length || 0,
      },
    });
  } catch (error) {
    console.error("Test error:", error);
    res.status(500).json({
      error: "Test failed",
      details: error.message,
    });
  }
}
