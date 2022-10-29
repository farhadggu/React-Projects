//Library Import
import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
//Local Import
import "./Todo.css"

const Todo = ({items, editTodo, removeTodo}) => {
  return (
    <div className='todo-lists'>
        {
            items.map((item) => {
                const {id, title} = item
                return (
                    <div key={id} className='todo-item'>
                        <p>{title}</p>
                        <div className='todo-icons'>
                            <RiCloseCircleLine className='delete-icon' onClick={() => removeTodo(id)} />
                            <TiEdit className='edit-icon' onClick={() => editTodo(id)} />
                        </div>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default Todo