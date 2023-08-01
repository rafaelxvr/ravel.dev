import './Nav.css'
import { useState } from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

export function Nav() {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav className='nav'>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome/>
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser/>
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <BiBook/>
      </a>
      <a href="#solutions" onClick={() => setActiveNav('#solutions')} className={activeNav === '#solutions' ? 'active' : ''}>
        <RiServiceLine/>
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageSquareDetail/>
      </a>
      {/*<a href="#blog" onClick={() => setActiveNav('#blog')} className={activeNav === '#blog' ? 'active' : ''}><AiOutlineBulb/></a>*/}
    </nav>
  )
}