import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiting map: IP -> timestamp array
const rateLimitMap = new Map<string, number[]>();

// HTML sanitization helper to prevent script injection in email clients
function sanitizeInput(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: NextRequest) {
  try {
    // 1. Extract IP for rate limiting
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown-client';
    const now = Date.now();
    const windowMs = 10 * 60 * 1000; // 10 minutes window
    const maxRequests = 5; // Max 5 submissions per 10 minutes per IP

    const clientTimestamps = (rateLimitMap.get(ip) || []).filter((timestamp) => now - timestamp < windowMs);

    if (clientTimestamps.length >= maxRequests) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please wait a few minutes before submitting another inquiry.',
        },
        { status: 429 }
      );
    }

    // 2. Parse request body
    const body = await req.json();
    const { name, email, subject, message, website } = body;

    // 3. Honeypot check (Spam bot trap)
    // The 'website' input field is hidden from legitimate users. If bots fill it, drop silently.
    if (website && website.trim().length > 0) {
      return NextResponse.json({ success: true, message: 'Inquiry received.' }, { status: 200 });
    }

    // 4. Server-Side Data Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid name (2 to 100 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim()) || email.trim().length > 120) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 3000) {
      return NextResponse.json(
        { success: false, error: 'Please enter a message between 10 and 3,000 characters.' },
        { status: 400 }
      );
    }

    const cleanName = sanitizeInput(name.trim());
    const cleanEmail = email.trim();
    const cleanSubject = subject && typeof subject === 'string' && subject.trim().length > 0
      ? sanitizeInput(subject.trim().slice(0, 150))
      : `Portfolio Inquiry from ${cleanName}`;
    const cleanMessage = sanitizeInput(message.trim());

    // 5. Check Environment Credentials
    const gmailUser = process.env.GMAIL_USER || 'tjelvinia@gmail.com';
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'tjelvinia@gmail.com';

    if (!gmailAppPassword) {
      console.warn(
        '⚠️ [Contact API] GMAIL_APP_PASSWORD is not set in environment variables. Email could not be sent to SMTP server.'
      );

      // Return a gentle error message guiding setup without crashing
      return NextResponse.json(
        {
          success: false,
          error:
            'Email delivery is currently configuring. Please contact me directly at tjelvinia@gmail.com while setup completes.',
        },
        { status: 503 }
      );
    }

    // 6. Initialize Nodemailer Gmail SMTP Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // SSL
      auth: {
        user: gmailUser,
        pass: gmailAppPassword.replace(/\s+/g, ''), // Remove spaces if copied from Google App Passwords
      },
    });

    // 7. Compose Email Content
    const mailOptions = {
      from: `"${cleanName} via Akumon.dev" <${gmailUser}>`,
      to: receiverEmail,
      replyTo: cleanEmail,
      subject: `[Portfolio Inquiry] ${cleanSubject}`,
      text: `New Portfolio Inquiry\n────────────────────────────\nName: ${cleanName}\nEmail: ${cleanEmail}\nSubject: ${cleanSubject}\nDate: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' })} (PHT)\n────────────────────────────\n\nMessage:\n${message.trim()}\n\n────────────────────────────\nSource: Portfolio Contact Form (https://elvinia-portfolio.vercel.app)`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0A0D14; color: #F8FAFC; margin: 0; padding: 24px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #0E131F; border: 1px solid #1E293B; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
            .header { background: linear-gradient(135deg, #0284C7 0%, #7C3AED 100%); padding: 24px; color: #FFFFFF; text-align: left; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; }
            .header p { margin: 4px 0 0; font-size: 12px; opacity: 0.9; font-mono; }
            .content { padding: 28px; }
            .field-group { margin-bottom: 18px; }
            .field-label { font-size: 11px; text-transform: uppercase; font-weight: 700; color: #38BDF8; letter-spacing: 0.5px; margin-bottom: 4px; }
            .field-value { font-size: 14px; color: #F1F5F9; line-height: 1.5; font-weight: 500; }
            .message-box { background-color: #070A10; border: 1px solid #334155; border-radius: 12px; padding: 18px; margin-top: 10px; font-size: 14px; line-height: 1.7; color: #E2E8F0; white-space: pre-wrap; word-break: break-word; }
            .footer { padding: 16px 28px; border-top: 1px solid #1E293B; background-color: #050811; font-size: 11px; color: #64748B; text-align: center; }
            .reply-btn { display: inline-block; margin-top: 16px; background: #00F0FF; color: #000000; font-weight: 700; font-size: 13px; padding: 10px 20px; border-radius: 8px; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>⚡ New Portfolio Inquiry</h1>
              <p>Source: Tristan Jesus V. Elvinia Portfolio Contact Form</p>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="field-label">Sender Name</div>
                <div class="field-value">${cleanName}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Sender Email</div>
                <div class="field-value"><a href="mailto:${cleanEmail}" style="color: #38BDF8; text-decoration: underline;">${cleanEmail}</a></div>
              </div>
              <div class="field-group">
                <div class="field-label">Subject</div>
                <div class="field-value">${cleanSubject}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Timestamp</div>
                <div class="field-value">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' })} (PHT)</div>
              </div>
              <div class="field-group">
                <div class="field-label">Message Content</div>
                <div class="message-box">${cleanMessage}</div>
              </div>
              <div style="text-align: center; margin-top: 24px;">
                <a href="mailto:${cleanEmail}?subject=Re: ${encodeURIComponent(cleanSubject)}" class="reply-btn">Reply to ${cleanName}</a>
              </div>
            </div>
            <div class="footer">
              Delivered securely to tjelvinia@gmail.com via Portfolio Contact Service
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 8. Transmit via Nodemailer
    await transporter.sendMail(mailOptions);

    // 9. Update rate limit tracker
    clientTimestamps.push(now);
    rateLimitMap.set(ip, clientTimestamps);

    return NextResponse.json(
      {
        success: true,
        message: 'Message delivered successfully to inbox.',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('❌ [Contact API Error]:', error?.message || error);

    // Return safe, sanitized error response
    return NextResponse.json(
      {
        success: false,
        error: 'Unable to send message right now. Please try again or reach out directly at tjelvinia@gmail.com.',
      },
      { status: 500 }
    );
  }
}
