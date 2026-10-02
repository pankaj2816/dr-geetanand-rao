import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Dr. Geetanand Rao Medical Oncology API',
    timestamp: new Date().toISOString(),
  })
})

// Contact / Consultation Enquiry endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, phone, email, reason, message } = req.body

    // Validation
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Patient name is required.' })
    }
    if (!phone || !/^[0-9+\s()-]{8,}$/.test(phone.trim())) {
      return res.status(400).json({ success: false, error: 'Valid phone number is required.' })
    }
    if (!message || message.trim().length < 10) {
      return res.status(400).json({ success: false, error: 'Message must be at least 10 characters.' })
    }

    console.log(`[Consultation Request] From: ${name} (${phone}) - Reason: ${reason || 'General'}`)

    // Optional SMTP transmission if configured
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      const mailOptions = {
        from: `"${name}" <${process.env.SMTP_USER}>`,
        to: process.env.RECIPIENT_EMAIL || 'drgeetanandrao@gmail.com',
        replyTo: email || undefined,
        subject: `[Website Enquiry] Consultation: ${name} (${reason || 'New Consultation'})`,
        html: `
          <h2>New Consultation Enquiry</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: sans-serif;">
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Patient Name</td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Contact Phone</td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;">${email || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Consultation Type</td><td style="padding: 8px; border: 1px solid #ddd;">${reason || 'New consultation'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td><td style="padding: 8px; border: 1px solid #ddd;">${message}</td></tr>
          </table>
        `,
      }

      await transporter.sendMail(mailOptions)
    }

    return res.status(200).json({
      success: true,
      message: 'Consultation request received successfully.',
    })
  } catch (error) {
    console.error('Error processing contact request:', error)
    return res.status(500).json({
      success: false,
      error: 'Internal server error while processing request.',
    })
  }
})

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`)
})
