import React from 'react'

export default function Form({ userInput, setUserInput, handleSubmit }) {
  return (
    <form className='todo-form' onSubmit={handleSubmit}>

        <div className='input-container'>

           <input 
           className='todo-input' 
           type="text" 
           placeholder={`Add tasks...`}
           value={userInput} 
           onChange={(e) => setUserInput(e.target.value)}
           />

           <button className='add-todo-btn'>Add Task</button>

        </div>
        
    </form>
  )
}
