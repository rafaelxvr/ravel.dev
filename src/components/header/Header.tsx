import './Header.css'
import { CTA } from './CTA'
import ME from '../../assets/me.jpg'
import { HeaderSocials } from './HeaderSocials'

export function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <h5>Hello I'm</h5>
        <h1>Rafael Xavier</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img className='me' src={ME} alt='me' />
        </div>

        <a href="#contact" className='scroll__down' >Scroll Down</a>
      </div>
    </header>
  )
}