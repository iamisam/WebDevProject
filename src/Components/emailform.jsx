import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

export const EmailSender = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      console.log(form.current)
  
      emailjs
        .sendForm('service_84h3y8s', 'template_o7fylms', form.current, {
          publicKey: 'iOKTuFLfxKfYdbGko',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
  };

export default EmailSender;