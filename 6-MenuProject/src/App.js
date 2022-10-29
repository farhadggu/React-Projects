import { useState } from 'react';
import Category from './Category';
import Menu from './Menu';
import data from './Data'
import './App.css';

function App() {
  const allCategories = ['all', ...new Set(data.map((item) => item.category))];

  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);


  const filterItems = (category) => {
    if (category === 'all') {
      return setMenuItems(data)
    }
    const newItems = data.filter((item) => item.category === category)
    return setMenuItems(newItems)
  }

  return (
    <main className='container'>
      <h2 className='headingContainer'>Our Menu</h2>
      <Category filterItems={filterItems} categories={categories} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
