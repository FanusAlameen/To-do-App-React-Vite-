import React, {useState} from "react"
import { ACTIONS } from "./Todo"
import { BsArrowRight } from 'react-icons/bs'

export default function EditTodo({ todo, dispatch }) {

  //edit form state
  const [editedValue, setEditedValue] = useState(todo.userInput)

  //edit form action
  function handleEditSubmit(e) {
    e.preventDefault()

    if(editedValue === "" || /^\s*$/.test(editedValue)) {
      return alert('Please Enter a Task.')
    } else {
      dispatch({type: ACTIONS.EDITED_TODO, payload: {editedValue: editedValue, id: todo.id}})
      setEditedValue('')
    }
  }

  return (
    <form onSubmit={handleEditSubmit}>

        <div className='edit-input-container'>

           <input 
           className='todo-input' 
           type="text" 
           placeholder={`Update Task...`}
           value={editedValue} 
           onChange={(e) => setEditedValue(e.target.value)}
           />

           <button className='edit-todo-btn'><BsArrowRight size='20px' /></button>

        </div>
        
    </form>
  )
}