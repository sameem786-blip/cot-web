import React , {useState} from "react";
import styled from "styled-components";
import nodemailer from 'nodemailer';
// Assets
import ContactImg1 from "../../assets/img/cot-contact2.jpg";
import ContactImg2 from "../../assets/img/cot-contact3.jpg";
import ContactImg3 from "../../assets/img/cot-contact1.jpg";

export default function Contact() {
  const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [subject, setSubject] = useState('');
const [message, setMessage] = useState('');




const sendMessage  = async (name,email,subject,message) => {
  if(name === '' || email === '' || subject === '' || message === ''){
    alert("Please Input all fields")
    return;
  }

  try {
    

let transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
    },
})

const info = await transporter.sendMail({
    from: `sameembbs@gmail.com <${process.env.SMTP_EMAIL}>`, // sender address
    to: "sameembbs@gmail.com", // list of receivers
    subject: `COT Request ${subject}`, // Subject line
    html: `<html></html>`, // html body
    cc: ''
});

return "Email Sent Sucessfully"
} catch (err) {
    console.log(err)
}

}
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <Form>
                <label className="font13">First name:</label>
                <input 
                  type="text" 
                  id="fname" 
                  name="fname" 
                  className="font20 extraBold"
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                />
                <label className="font13">Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="font20 extraBold" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="font13">Subject:</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="font20 extraBold" 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <label className="font13">Message:</label>
                <textarea 
                  rows="4" 
                  cols="50" 
                  id="message" 
                  name="message" 
                  className="font20 extraBold" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Send Message" className="pointer animate radius8" style={{ maxWidth: "220px" }} onClick={ () => {sendMessage(name, email, subject, message)}}/>
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" style={{width: "180px"}}/>
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" style={{width: "180px"}}/>
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" style={{width: "278px"}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









