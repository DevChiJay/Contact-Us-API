const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: 'mail.host.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'noreply@useremail.com',
    pass: 'emailPass',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = transporter;
