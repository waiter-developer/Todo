import React from 'react'
import TodoListItem from '../TodoListItem'
import './Todo_list.css'

const TodoList = ({ todos , onDeleted,
                    onToggleImportant, onToggleDone}) => {

  const elements = todos.map((item) => {

    const {id, ...itemProps} = item
    return (
      <li key={item.id} className="list-group-item"> 
        < TodoListItem { ...itemProps } 
        onDeleted={() => onDeleted(id)}
        onToggleImportant={() => onToggleImportant(id)}
        onToggleDone={() => onToggleDone(id)}
        />
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