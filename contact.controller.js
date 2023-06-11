const transporter = require('./contact.transporter');

function isEmpty(value) {
  return !value || value.trim() === '';
}

function contactUs(req, res, next) {
  const enteredData = req.body;

  const contactOptions = {
    from: `"${enteredData.fname}" <noreply@senderemail.tech>`,
    to: enteredData.sendTo, // list of receivers
    subject: `${enteredData.subject} - [Contact Form]`,
    html: `<div
    style="
      font-family: open sans;
      font-size: 1rem;
      margin: 3rem auto;
      padding: 3rem;
      width: 24rem;
      color: #302f2f;
      border: 1px solid #cac7c7;
      border-radius: 5px;
      box-shadow: 1px 1px #888888;
    "
  >
    <img src="LOGO" alt="" height="60px" />
    <hr />
    <h2 style="text-align: center">Message From Site Contact Us Form</h2>
    <p><strong>Sender: </strong>${enteredData.fname} - ${enteredData.email}</p>
    <p><strong>Subject: </strong>${enteredData.subject}</p>
    <p>${enteredData.message}</p>
  </div>
  `, // html body
  };

  async function mailer() {
    if (
      isEmpty(enteredData.fname) ||
      isEmpty(enteredData.email) ||
      isEmpty(enteredData.subject) ||
      isEmpty(enteredData.message)
    ) {
      return res.json({
        message:
          'Please check your input. Be sure to provide a valid email, subject and message',
      });
    }
    // send mail with defined transport object
    await transporter.sendMail(contactOptions);
    return res.json({ message: 'Message sent successfully!' });
  }

  try {
    mailer();
  } catch (error) {
    next(error);
    return;
  }
}

module.exports = contactUs;
