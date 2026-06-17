const nodemailer = require('nodemailer');

/**
 * Utility to send email notifications to the admin.
 * @param {string} subject - The subject of the email.
 * @param {string} htmlContent - The HTML content body of the email.
 */
const sendEmailNotification = async (subject, htmlContent) => {
  try {
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || '465', 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.ADMIN_NOTIFICATION_EMAIL;

    // Check if configuration exists
    if (!host || !user || !pass || !receiver) {
      console.warn('⚠️ Email sending skipped: SMTP configuration environment variables are missing.');
      console.log('Required vars: SMTP_HOST, SMTP_USER, SMTP_PASS, ADMIN_NOTIFICATION_EMAIL');
      return;
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: port === 465, // True for port 465, false for other ports (like 587)
      auth: {
        user: user,
        pass: pass
      },
      tls: {
        // Do not fail on invalid certificates (useful for custom mail servers)
        rejectUnauthorized: false
      }
    });

    // Setup email data
    const mailOptions = {
      from: `"SusaLabs Alerts" <${user}>`,
      to: receiver,
      subject: subject,
      html: htmlContent
    };

    // Send email asynchronously
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Notification Email sent successfully: %s', info.messageId);
  } catch (error) {
    console.error('❌ Error sending notification email:', error.message);
  }
};

module.exports = sendEmailNotification;
