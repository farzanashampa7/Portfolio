import nodemailer from 'nodemailer';

const ContactAPI = async (req, res) => {
  const user = process.env.EMAIL;
  const pass = process.env.EMAIL_PASS;

  const { name, phone, email, subject, message } = req.body;

  const data = {
    name,
    phone,
    email,
    subject,
    message,
  };

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user,
      pass,
    },
  });
  try {
    const mail = await transporter.sendMail({
      from: user,
      to: 'farzanashampa7@gmail.com',
      replyTo: email,
      subject: data.subject,
      text: data.text,
      html: '<h1>Test Title</h1><p>Some Text</p>',
    });

    console.log('Message sent:', mail.messageId);

    return res.status(200).json({ message: 'message sent successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'message was not sent ' });
  }

  return res.status(200).json({ message: 'success' });
};

export default ContactAPI;
