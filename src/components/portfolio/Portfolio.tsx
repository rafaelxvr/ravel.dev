import './Portfolio.css'
import IMG1 from '../../assets/authentication.png'
import IMG2 from '../../assets/calculator.jpg'
import IMG3 from '../../assets/portfolio.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Authentication API',
    github: 'https://github.com/rafaelxvr/authentication-api',
    demo: 'https://auth-clean-api-fdbc0cccb71c.herokuapp.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Phone Calls Tax Calculator',
    github: 'https://github.com/rafaelxvr/show-me-the-code-test',
    demo: '#'
  },
  {
    id: 3,
    image: IMG3,
    title: 'React Portfolio',
    github: 'https://github.com/rafaelxvr/ravel.dev',
    demo: 'https://rafaelxavier.tech'
  }
]

export function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
              <div className='portfolio_item_image'>
                <img src={image} alt={title} />
              </div>
      
                <h3>{title}</h3>
                <div className="portfolio_item_cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}