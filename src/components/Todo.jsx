import React, { useState, useReducer } from 'react'
import Form from './Form'
import TodoRow from './TodoRow'

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  EDIT_TODO: 'edit-todo',
  EDITED_TODO: 'edited-todo',
  DELETE_TODO: 'delete-todo'
}


export default function Todo() {

  const id = crypto.randomUUID() //generates IDs.

  function reducer(todos, action) {
    switch(action.type){

      case ACTIONS.ADD_TODO:
         return [...todos, newTodo = {
            id: id, 
            userInput: action.payload.userInput, 
            completed: false,
            isEdit: false
           }] //returns the previous todos along with the newly created todo.

      case ACTIONS.TOGGLE_TODO:
        return todos.map((todo) => todo.id === action.payload.id ? 
        {...todo, completed: !todo.completed} : todo      
        )

      case ACTIONS.EDIT_TODO:
        return todos.map((todo) => todo.id === action.payload.id ? 
        {...todo, isEdit: !todo.isEdit} : todo
        )

      case ACTIONS.EDITED_TODO:
        let editedVal = action.payload.editedValue
        return todos.map((todo) => todo.id === action.payload.id ? 
        {...todo, userInput: editedVal, isEdit: !todo.isEdit} : todo
        )
        
      case ACTIONS.DELETE_TODO:
        return todos.filter((todo) => todo.id !== action.payload.id)

      default:
        return todos
    }
  }

  let newTodo = {};

  //reducer hook for to-do functions
  const [todos, dispatch] = useReducer(reducer, [])

  //form state
  const [userInput, setUserInput] = useState('')

  //form action
  function handleSubmit(e) {
    e.preventDefault()

    if(userInput === "" || /^\s*$/.test(userInput)) {
      return alert('Please Enter a Task.')
    } else {
      dispatch({type: ACTIONS.ADD_TODO, payload: {userInput: userInput}})
      setUserInput('')
    }
  }

    
  return (
    <>
        <h1 className='main-heading'>Schedule Tasks!</h1>

        <Form 
         userInput={userInput} 
         setUserInput={setUserInput} 
         handleSubmit={handleSubmit} 
         />

        <TodoRow 
         todos={todos} 
         dispatch={dispatch} 
        />
    </>
  )
}
