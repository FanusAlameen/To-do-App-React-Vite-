import React from 'react'
import { ACTIONS } from './Todo'
import { TbEdit } from 'react-icons/tb'
import { AiFillDelete } from 'react-icons/ai'
import EditTodo from './EditTodo'

export default function TodoList({ todos, dispatch }) {
  
  return todos.map((todo, index) => ( 
    todo.isEdit ? (
      <EditTodo 
       key={index} 
       todo={todo}
       dispatch={dispatch}
      />
    ) : (
    <div className={todo.completed ? 'todo-container todo-container-completed' : 'todo-container'} key={todo.id}>

      <div 
       className={todo.completed ? 'todo-text completed' : 'todo-text'} 
       onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}
       >
       {todo.userInput}
      </div>
      
      <div className='icons'>
      
        <TbEdit 
         className='edit-todo' 
         size='20px' 
         onClick={() => dispatch({type: ACTIONS.EDIT_TODO, payload: {id: todo.id}})}
         />

        <AiFillDelete 
         className='delete-todo' 
         size='20px' 
         onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}
         />

      </div>
    </div>
    )
  ))

}
