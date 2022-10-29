import Accordion from './Accordion';
import './App.css';
import question from './Data';

function App() {
  return (
    <main>
      <div className='container'>
        <h1 className='headingContainer'>Accordion Project Setup</h1>
        <section>
          {
            question.map((question) => {
              return <Accordion key={question.id} {...question} />
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
