"use client";
import NewsLatterBox from "./NewsLatterBox";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Footer/style.css";

const Contact = () => {
  const [btnText, setBtnText] = useState("Submit");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setBtnText("Submit");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Call the sendData function with the current formData
    sendData(formData);

    // Optional: clear the form
    setFormData({ name: "", email: "", message: "" });
  };

  async function sendData(data: {
    name: string;
    email: string;
    message: string;
  }) {
    // This function will be called to send the data (implementation depends on your needs)

    const { name, email, message } = data;

    try {
      const response = await axios.post("/api/sendEmail", {
        name,
        email,
        message,
      });
      console.log(response.data); // Handle successful response (e.g., display success message)
      setIsSubmitting(false);
      setIsSubmitted(true);
      setBtnText("Submitted");
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      setBtnText("Submit");
      alert("Network Error!");
      // Handle errors during email sending (e.g., display error message)
    }
  }

  // export default async function handler(req, res) {
  //   if (req.method === 'POST') {
  //     try {
  //       let testAccount = await nodemailer.createTestAccount();

  //   let transporter = await nodemailer.createTransport({
  //       host: "smtp.gmail.com",
  //       service: "gmail",
  //       port: 587,
  //       auth: {
  //           // TODO: replace `user` and `pass` values from <https://forwardemail.net>
  //           user: '',
  //           pass: '',
  //       },
  //   })

  //   const info = await transporter.sendMail({
  //       from: `sameembbs@gmail.com`, // sender address
  //       to: 'sameembbs@gmail.com', // list of receivers
  //       subject: 'A ticket has been raised on cot.com.pk', // Subject line
  //       html: `<html lang="en">
  // <head>
  //   <meta charset="UTF-8">
  //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //   <title>Ticket Notification</title>
  //   <style>
  //     body {
  //       font-family: Arial, sans-serif;
  //       margin: 0;
  //       padding: 0;
  //       color: #333;
  //     }
  //     .container {
  //       padding: 20px;
  //       max-width: 600px;
  //       margin: 0 auto;
  //       border: 1px solid #ddd;
  //       border-radius: 4px;
  //     }
  //     .header {
  //       font-size: 20px;
  //       font-weight: bold;
  //       margin-bottom: 10px;
  //     }
  //     .content {
  //       line-height: 1.5;
  //     }
  //     .footer {
  //       text-align: center;
  //       font-size: 12px;
  //       margin-top: 20px;
  //     }
  //   </style>
  // </head>
  // <body>
  //   <div class="container">
  //     <h1 class="header">New Ticket on Your Website</h1>
  //     <p class="content">
  //       A new ticket has been raised on your website by <strong${req.body.name}</strong> (${req.body.email}).
  //     </p>
  //     <p class="content">
  //       **Message:**<br>
  //       ${req.body.message}
  //     </p>
  //     <p class="footer">
  //       &copy; cot.com.pk] 2024. All rights reserved.
  //     </p>
  //   </div>
  // </body>
  // </html>`, // html body
  //       cc: 'info@cot.com.pk'
  //   });

  //   } catch (err) {
  //       console.log(err)
  //   }
  //   } else {
  //     res.status(405).json({ message: 'Method not allowed!' });
  //   }
  // }
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="container">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Want to get in touch?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        placeholder="Enter your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={isSubmitted}
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      {isSubmitting ? (
                        <div className="loader"></div>
                      ) : btnText === "Submitted" ? (
                        <svg width="20" height="20" viewBox="0 0 400 400">
                          <circle
                            fill="none"
                            stroke="#68E534"
                            stroke-width="20"
                            cx="200"
                            cy="200"
                            r="190"
                            className="circle"
                            stroke-linecap="round"
                            transform="rotate(-90 200 200)"
                          />
                          <polyline
                            fill="none"
                            stroke="#68E534"
                            stroke-width="24"
                            points="100,210 170,270 280,150"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="tick"
                          />
                        </svg>
                      ) : (
                        btnText
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
