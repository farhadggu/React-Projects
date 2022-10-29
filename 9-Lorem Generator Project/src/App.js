import { useState } from 'react';
import './App.css';
import data from './Data';

function App() {

  const [count, setCount] = useState(0);
  const[text, setText] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 1
    }
    if (count > 8) {
      amount = 8
    }

    setText(data.slice(0,amount));
  }

  return (
    <section className='container'>
      <h3>tierd of boring lorem ipsum?</h3>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='amount'>paragraphs: </label>
          <input type='number' name='amount' id='amount' value={count} onChange={(e) => setCount(e.target.value)} />
        </div>
        <button type='submit'>generate</button>
      </form>
      <article className='article'>
        {
          text.map((item, index) => {
            return <p key={index}>{item}</p>
          })
        }
      </article>
    </section>
  );
}

export default App;
