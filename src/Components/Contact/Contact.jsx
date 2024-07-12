import React from 'react'
import './contact.css'
import { Link } from 'react-scroll'
import FacebbokIcon from '../Assets/facebook_icon.png'
import XIcon from '../Assets/x_icon.png'
import YouTubeIcon from '../Assets/youtube.png'
import InstagramIcon from '../Assets/insta_icon.jpeg'
import TgIcon from '../Assets/tg_icon.png'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contactPage">
        <h1 className="contactPageTitle">Contact Us</h1>
        <span className='contactDescription'>Fill in the form below to get in touch with us:</span>
        <form action="" className="contactForm">
          <input type="text" placeholder='Enter Your Name' name='name' className='name'/>
          <input type="email" placeholder='Enter Your Email' name='email' className='email'/>
          <textarea name="message" rows="5" placeholder='Your Message'className='message' ></textarea>
          <button type='submit' className="submitBtn" value="send">Submit</button>
          <div className="links">
                    <img src={FacebbokIcon} alt="socials" className="link" />
                    <img src={XIcon} alt="socials" className="link" />
                    <img src={YouTubeIcon} alt="socials" className="link" />
                    <img src={InstagramIcon} alt="socials" className="link" />
                    <img src={TgIcon} alt="socials" className="link" />
                </div>
        </form>

      </div>
    </section>
  )
}

export default Contact
