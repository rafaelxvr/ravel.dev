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
              <p>Solid experience in full-stack development, enabling the creation of complete solutions, from user interface to backend, ensuring a high-quality experience for end-users.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Advanced skills in technologies such as Node.js, React.js, JavaScript/TypeScript, HTML, and CSS, providing the ability to build efficient and user-friendly web applications.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Proficiency in .NET Core/Framework (C#) and Delphi (Object Pascal), allowing development in different environments and programming languages.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Strong knowledge of development best practices, such as DDD, BDD, TDD, Clean Code, and SOLID Architecture, ensuring proper code maintenance and scalability.</p>
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
              <p>Focus on user-centric design, aiming to create intuitive and user-friendly applications that meet the needs of customers and end-users.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Experience in robust code architecture, ensuring the stability and flexibility of developed systems, allowing for future expansions and improvements.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Ability to collaborate with cross-functional teams, including marketing, customer support, and sales, ensuring a collaborative approach to creating innovative solutions.</p>
            </li>
          </ul>
        </article>

        <article className='solution'>
          <div className='solution_head'>
            <h3>Database Structuring</h3>
          </div>

          <ul className='solution_list'>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Advanced knowledge of SQL and NoSQL databases, enabling the appropriate selection of the database type for each project and optimizing data storage and retrieval.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Experience in database modeling, ensuring an efficient and scalable design, improving the performance and security of systems.</p>
            </li>
            <li>
              <BiCheck className='solution_list_icon' />
              <p>Skills in conducting requirement analysis and issue tracking, facilitating the identification and quick resolution of database-related issues.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}