import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path='/movie/:id' element={<SingleMovie />} />
    </Routes>
  );
}

export default App;
