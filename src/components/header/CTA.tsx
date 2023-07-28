import CVEN from '../../assets/Rafael Xavier - EN.pdf'
import './Header.css'

export function CTA() {
  return (
    <div className='cta'>
        <a href={CVEN} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}