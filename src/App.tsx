import './global.css'
import { Header } from './components/header/Header'
import { Nav } from './components/nav/Nav'
import { About } from './components/about/About'
import { Experience } from './components/experience/Experience'
import { Solutions } from './components/solutions/Solutions'
import { Portfolio } from './components/portfolio/Portfolio'
import { Testimonials } from './components/testimonials/Testimonials'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer';
import { Blog } from './components/blog/Blog'

export function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Solutions />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}
