import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

export function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

    <div className='container experience_container'>
      <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
              <h4>Node.js</h4>
              <small className='text_light'>Advanced</small>
            </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>C# / .NET Core</h4>
                <small className='text_light'>Advanced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text_light'>Advanced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>NoSQL</h4>
                <small className='text_light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Delphi</h4>
                <small className='text_light'>Advanced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Python</h4>
                <small className='text_light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience_frontend'>
          <h3>Frontend Development</h3>

          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Typescript</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>React.js</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text_light'>Intermediate</small>
              </div>
            </article>
          </div>
      </div>

      <div className='experience_others'>
          <h3>Other Skills</h3>
          <div className='experience_content'>
          <article className='experience_details'>
          <BsPatchCheckFill className='experience_details_icon'/>
          <div>
            <h4>Git</h4>
            <small className='text_light'>Experienced</small>
          </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
              <h4>Unitary Tests</h4>
              <small className='text_light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
              <h4>Automated Tests</h4>
              <small className='text_light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
              <h4>Requeriment Analysis</h4>
              <small className='text_light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
              <h4>Bug Tracking</h4>
              <small className='text_light'>Experienced</small>
            </div>
          </article>
          </div>
        </div>
    </div>
    </section>
  )
}