import React from 'react'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
// import './App.css';
import "./index.css"
import { useGlobalContext } from './context/context';
import Submenu from './components/Submenu';


const App = () => {

  const data = useGlobalContext();
  console.log(data)

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Home />
      <Submenu />
    </div>
  )
}

export default App