import React from 'react'
import TodoListItem from '../TodoListItem'
import './Todo_list.css'

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {

    const {id, ...itemProps} = item
    return (
      <li key={item.id} className="list-group-item"> 
        < TodoListItem { ...itemProps } />
      </li>
    )
  })
  return (
    <ul className="list-group todo_list">
      { elements }
    </ul> 
  )
}

export default TodoList