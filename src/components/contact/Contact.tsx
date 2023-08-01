import './Contact.css'
import React from "react";
import { MdOutlineEmail } from 'react-icons/md'
import { RiInstagramLine } from 'react-icons/ri' 
import { BsTelegram } from 'react-icons/bs'
import emailjs from 'emailjs-com'

export const Contact = () => {

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    emailjs.sendForm("service_u783p0h", "template_faba91j",  e.currentTarget, "019ZSgKm45fBFjN8H")
    
    e.currentTarget.reset()
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">

          <article className="contact_option">
            <MdOutlineEmail className='contact_option_icon' />
            <h4>Email</h4>
            <h5>rafaellucasxc@gmail.com</h5>
            <a href='mailto:rafaellucasxc@gmail.com' target='_blank'>Send a Message</a>
          </article>

          <article className="contact_option">
            <RiInstagramLine className='contact_option_icon' />
            <h4>Instagram</h4>
            <h5>@rafaelxv_</h5>
            <a href='https://ig.me/m/rafaelxv_' target='_blank'>Send a Message</a>
          </article>

          <article className="contact_option">
            <BsTelegram className='contact_option_icon' />
            <h4>Telegram</h4>
            <h5>@rafaelxv</h5>
            <a href='https://t.me/rafaelxv' target='_blank'>Send a Message</a>
          </article>
        </div>

        <form onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}