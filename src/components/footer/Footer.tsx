import './Footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import logo from '../../assets/logo.svg'

export function Footer() {
  return (
    <footer>
      <a href='#' className='footer_logo'>
        <img src={logo} alt='logo' />
        UNRAVEL
      </a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#solutions'>Solutions</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li hidden><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
        <li hidden><a href='#blog'>Blog</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://www.facebook.com'><FaFacebookF /></a>
        <a href='https://www.instagram.com'><FiInstagram /></a>
        <a href='https://www.twitter.com'><IoLogoTwitter /></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Unravel Tech. All rights reserved.</small>
      </div>
    </footer>
  )
}