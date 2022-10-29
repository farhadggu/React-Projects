import { useEffect, useState } from 'react';
import Alert from './Alert';
import './App.css';
import List from './List';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list) {
    return JSON.parse(localStorage.getItem('list'))

  } else {
    return []
  }
}

function App() {

  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({show:false, msg:'', type:''})

  const handleSubmit = e => {
    e.preventDefault();

    if(!name) {
      //display errors
      showAlert(true, 'danger', 'please enter value!')

    } else if(name && isEditing) {
      //edit tasks
      setList(list.map((item) => {
        if(item.id === editID){
          return {...item, title: name}
        }
        return item
      })
      )
      setName('')
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'item edited successfuly')

    } else{
      const newItem = { id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])
      showAlert(true, 'success', 'item added to the list successfuly')
      setName('')
    }

  }

  const showAlert = (show=false, type='', msg='') => {
    setAlert({show, type, msg})
  }

  const clearList = () => {
    setList([]);
    showAlert(true, 'danger','empty list')
  }

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id))
    showAlert(true, 'danger', 'item removed');
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <section className='section-bud'>
      <form onSubmit={handleSubmit}>
        { alert && <Alert {...alert} removeAlert={showAlert} list={list} /> }
        <h3>grocery bud</h3>
        <div className='form-bud'>
          <input 
            type='text' 
            placeholder='e.g eggs' 
            value={name} 
            onChange={e => setName(e.target.value)} 
          />
          <button type='submit'>{isEditing ? 'edit' : 'submit'}</button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button onClick={clearList} className='clear-btn'>clear items</button>
        </div>
      )}
    </section>
  );
}

export default App;
