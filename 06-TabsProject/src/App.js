import { useState } from 'react';
import './App.css';
import data from './Data';
import { FaAngleDoubleRight } from 'react-icons/fa'

function App() {

  const[jobs, setJobs] = useState(data);
  const[value, setValue] = useState(0);  

  const {company, dates, duties, title} = jobs[value];
  return (
    <section>
      <div className='heading'>
        <h2>Expierence</h2>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <button className={`${index === value && 'btn-container-active'}`} key={item.id} onClick={() => setValue(index)}>
                {item.company}
              </button>
            )
          })}
        </div>
        <article className='article-jobs'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='article-date'>{dates}</p>
          {
            duties.map((duty, index) => {
              return (
                <div className='icons' key={index}>
                  <FaAngleDoubleRight className='angle-double'></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              )
            })
          }
        </article>
      </div>
    </section>
  );
}

export default App;
