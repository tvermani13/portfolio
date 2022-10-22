import {React, useRef} from 'react'
import './Contacts.css'

import { AiOutlineMail, AiFillFacebook, AiFillPhone } from 'react-icons/ai'

import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_yrlnoip', 'template_cvgcbkp', form.current, 'NWG7ry04KWkMLv_MV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='Contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact me:</h2>

      <div className="container contacts__container">
        <div className="contact__options">

          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon"/>
            <h4>Personal Email</h4>
            <h5>tejasvermani@gmail.com</h5>
            <a href="mailto:tejasvermani@gmail.com"  rel="noreferrer" target="_blank">Send an email</a>
          </article>

          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon"/>
            <h4>Georgia Tech Email</h4>
            <h5>tvermani3@gatech.edu</h5>
            <a href="mailto:tvermani3@gatech.edu"  rel="noreferrer" target="_blank">Send an email</a>
          </article>

          <article className="contact__option">
            <AiFillFacebook className="contact__option-icon"/>
            <h4>Facebook Messenger</h4>
            <h5>@tvermani13</h5>
            <a href="https://m.me/tejas.vermani/" rel="noreferrer" target="_blank">Send a Facebook message</a>
          </article>

          <article className="contact__option">
            <AiFillPhone className="contact__option-icon"/>
            <h4>Call/Text</h4>
            <h5>203-979-2084</h5>
            <a href="tel: 2039792084" rel="noreferrer" target="_blank"> Call or text me</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='subject' placeholder="Subject" required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className="btn btn-primary" >Send Message</button>
        </form> 
      </div>
      
    </section>
  )
}

export default Contacts