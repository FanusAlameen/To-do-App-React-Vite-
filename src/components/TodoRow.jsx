import React from 'react'
import TodoList from './TodoList'

export default function TodoRow({ todos, dispatch }) {

  const weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  const date = new Date();
  const day = date.getDay()
  const dateToday = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return (
    <div className='todo-row'>
      <h3 className='date'>{`${weekday[day]} ( ${dateToday} - ${month} - ${year} )`}</h3>
      <TodoList 
       todos={todos} 
       dispatch={dispatch}
       />
    </div>
  )
}
