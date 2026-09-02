export default async function handler(request, response) {
  const { name, email, type, message } = request.body ?? {}

  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method not allowed.' })
  }

  if (!name || !email || !message) {
    return response.status(400).json({ message: 'Name, email, and message are required.' })
  }

  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com'
  const smtpPort = Number(process.env.SMTP_PORT || 465)
  const smtpSecure = process.env.SMTP_SECURE !== 'false'
  const smtpUser = process.env.SMTP_USER || process.env.VERCEL_EMAIL_USER || 'thecatechistcorner@gmail.com'
  const smtpPass = process.env.SMTP_PASS || process.env.VERCEL_EMAIL_PASS
  const toEmail = process.env.EMAIL_TO || 'thecatechistcorner@gmail.com'

  if (!smtpPass) {
    return response.status(500).json({
      message: 'Email delivery is not configured yet. Add SMTP credentials in your Vercel project settings.',
    })
  }

  try {
    const nodemailer = await import('nodemailer')
    const transporter = nodemailer.default.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.sendMail({
      from: smtpUser,
      to: toEmail,
      replyTo: email,
      subject: `CatechistCorner ${type || 'Message'} from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Type: ${type || 'Message'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })

    return response.status(200).json({ message: 'Thanks! Your message was sent successfully.' })
  } catch (error) {
    console.error('Email send error:', error)
    return response.status(500).json({
      message: 'Unable to send the email right now. Please try again later.',
    })
  }
}
