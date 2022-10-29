import './App.css';
import Values from 'values.js'
import { useState } from 'react';
import SingleColor from './SingleColor';

function App() {

  const[color, setColor] = useState('');
  const[error, setError] = useState(false);
  const[list, setList] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10)
      setList(colors)
      setError(false)

    } catch (error) {
      setError(true)

    }
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form className='form' onSubmit={handleSubmit}>
          <input 
            placeholder='#fff123' 
            type='text' 
            value={color} 
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? 'error' : null}`}
          />
          <button type='submit'>Submit</button>
        </form>
      </section>
      <section className='colors'>
        {
          list.map((color, index) => {
            return(
              <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
            )
          })
        }
      </section>
    </>
  );
}

export default App;
