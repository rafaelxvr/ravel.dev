import './Solutions.css'
import { BiCheck } from 'react-icons/bi'

export function Solutions() {
  return (
    <section id='solutions'>
      <h5>What I Offer</h5>
      <h2>Solutions</h2>

      <div className='container solutions_container'>
        <article className='solution'>
          <div className='solution_head'>
            <h3>Software Development</h3>
          </div>

          <ul className='solution_list'>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        
        <article className='solution'>
          <div className='solution_head'>
            <h3>Software Architecture Design</h3>
          </div>

          <ul className='solution_list'>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className='solution'>
          <div className='solution_head'>
            <h3>Database Structure</h3>
          </div>

          <ul className='solution_list'>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}