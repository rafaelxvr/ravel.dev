import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import './Header.css'

export function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/rafaelxvr/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/rafaelxvr" target="_blank" rel="noreferrer"><FaGithub /></a>
    </div>
  )
}