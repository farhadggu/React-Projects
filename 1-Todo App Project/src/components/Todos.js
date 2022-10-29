//Library Import
import React, { useState } from 'react'
//Local Import
import Todo from './Todo'
import Alert from './Alert'
import "./Todos.css"

const Todos = () => {

  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show:false, msg:'', type:''});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      showAlert(true, 'Enter A Value...!', 'danger');
    }

    else if (name && isEditing) {
      setList(list.map((item) => {
          if (item.id === editID) {
            return {...item, title: name}
          }
          return item
        })
        )
        setName('')
        setIsEditing(false)
        setEditID(null)
        showAlert(true, 'Your Item Edited Successfuly', 'success')
    }

    else {
      const newItem = {id: new Date().getTime().toString(), title:name}
      setList([...list, newItem])
      showAlert(true, 'New Item Added Successfuly', 'success')
      setName('')
    }
    console.log(list)
  }

  const showAlert = (show=false, msg='', type='') => {
    setAlert({show, msg, type})
  }

  const editTodo = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  const removeTodo = (id) => {
    setList(
      list.filter((item) => item.id !== id)
    )
  }

  return (
    <section className='todo-container'>
        <h1 className='todo-heading'>Todo App</h1>
        <form className='todo-form' onSubmit={handleSubmit}>

            { alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/> }
            <input value={name} type='text' placeholder='Add Your Todo...' onChange={(e) => setName(e.target.value)} />
            <button>Submit</button>

            <Todo items={list} editTodo={editTodo} removeTodo={removeTodo} />

        </form>

        <button onClick={() => setList([])} className='todo-clear-btn'>clear all</button>
    </section>
  )
}

export default Todos