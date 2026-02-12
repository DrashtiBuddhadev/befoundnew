/// <reference types="node" />

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, services, message } = req.body;

    // Validate required fields
    if (!name || !email || !message || !services || services.length === 0) {
      return res.status(400).json({ 
        message: 'Missing required fields: name, email, services, and message are required' 
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    // Format services list
    const servicesList = Array.isArray(services) 
      ? services.map(s => `<li>${s}</li>`).join('') 
      : services;

    // Email content to company
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || 'info@befound.studio',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Name:</strong> 
              <span style="color: #666;">${name}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Email:</strong> 
              <a href="mailto:${email}" style="color: #6366f1;">${email}</a>
            </p>
            
            ${phone ? `
              <p style="margin: 10px 0;">
                <strong style="color: #333;">Phone:</strong> 
                <span style="color: #666;">${phone}</span>
              </p>
            ` : ''}
            
            ${company ? `
              <p style="margin: 10px 0;">
                <strong style="color: #333;">Company:</strong> 
                <span style="color: #666;">${company}</span>
              </p>
            ` : ''}
            
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Services Interested In:</strong>
            </p>
            <ul style="color: #666; margin: 5px 0 15px 20px;">
              ${servicesList}
            </ul>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #6366f1;">
              <strong style="color: #333;">Message:</strong>
              <p style="color: #666; margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px;">
            <p>This email was sent from the BeFound Studio contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // Auto-reply to customer
    const autoReplyOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting BeFound Studio',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">Thank You for Reaching Out!</h2>
          
          <p style="color: #666; line-height: 1.6;">Hi ${name},</p>
          
          <p style="color: #666; line-height: 1.6;">
            Thank you for contacting BeFound Studio. We've received your message and our team will review it shortly.
          </p>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f0f4ff; border-left: 4px solid #6366f1;">
            <p style="color: #333; margin: 0;"><strong>Your message:</strong></p>
            <p style="color: #666; margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #666; line-height: 1.6;">
            We typically respond within 24-48 hours. If you need immediate assistance, please feel free to call us directly.
          </p>
          
          <p style="color: #666; line-height: 1.6;">
            Best regards,<br>
            <strong>The BeFound Studio Team</strong>
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px;">
            <p>BeFound Studio</p>
            <p>Email: info@befound.dev</p>
          </div>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    res.status(200).json({ 
      message: 'Email sent successfully',
      success: true 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Error sending email. Please try again later.',
      error: error.message,
      success: false
    });
  }
}
