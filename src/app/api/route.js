import nodemailer from 'nodemailer';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      let testAccount = await nodemailer.createTestAccount();

  let transporter = await nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: 587,
      auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: '',
          pass: '',
      },
  })

  const info = await transporter.sendMail({
      from: `sameembbs@gmail.com`, // sender address
      to: 'sameembbs@gmail.com', // list of receivers
      subject: 'A ticket has been raised on cot.com.pk', // Subject line
      html: `<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ticket Notification</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .container {
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .header {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .content {
      line-height: 1.5;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="header">New Ticket on Your Website</h1>
    <p class="content">
      A new ticket has been raised on your website by <strong${req.body.name}</strong> (${req.body.email}).
    </p>
    <p class="content">
      **Message:**<br>
      ${req.body.message}
    </p>
    <p class="footer">
      &copy; cot.com.pk] 2024. All rights reserved.
    </p>
  </div>
</body>
</html>`, // html body
      cc: 'info@cot.com.pk'
  });
  
  } catch (err) {
      console.log(err)
  }
  } else {
    res.status(405).json({ message: 'Method not allowed!' });
  }
}