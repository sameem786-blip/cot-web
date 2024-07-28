import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req){
  try{

    const { name, email, message, attachment } = await req.json();

    let mailOptions;

    let transporter = await nodemailer.createTransport({
            host: "smtp.gmail.com",
            service: "gmail",
            port: 587,
            auth: {
                // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASS,
            },
        });



        if(!attachment){
          mailOptions = {
            from: 'sameembbs@gmail.com',
            to: 'sameembbs@gmail.com',
            subject: 'A ticket has been raised on cot.com.pk',
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
                          A new ticket has been raised on cot.com.pk landing site by <strong>${name}</strong> (${email}).
                        </p>
                        <p class="content">
                          **Message:**<br>
                          ${message}
                        </p>
                        <p class="footer">
                          &copy; cot.com.pk 2024. All rights reserved.
                        </p>
                      </div>
                    </body>
                    </html>`,
                    cc: 'info@cot.com.pk'
          }
        }else{
          mailOptions = {
            from: 'sameembbs@gmail.com',
            to: 'sameembbs@gmail.com',
            subject: 'Resume submission on cot.com.pk',
            html: `
              <html>
                <body>
                  <h1>New Ticket on Your Website</h1>
                  <p>A new resume/cv has been submitted on cot.com.pk</p>
                  <p>**Attachment:** ${attachment.name}</p>
                </body>
              </html>
            `,
            cc: 'info@cot.com.pk',
            attachments: [
              {
                filename: attachment.name,
                content: attachment.data, // Base64 or Buffer representation
                contentType: attachment.type, // e.g., 'application/pdf', 'image/jpeg'
              },
            ],
          }
        }

        const info = await transporter.sendMail(mailOptions);

        return NextResponse.json({message: "Email sent successfully"},{status: 200})
  }catch(err){
    return NextResponse.json({message: "Internal Server Error"},{status: 500})
  }
}