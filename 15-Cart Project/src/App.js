import './App.css';
import Navbar from "./Navbar"
import CartContainer from './CartContainer';
import { useGlobalContext } from './context/context';

function App() {

  const { loading } = useGlobalContext();
  
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loaing...</h1>
      </div>
    )
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
