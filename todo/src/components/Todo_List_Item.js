import React from 'react'
import './Todo_List_item.css'

const TodoListItem = ({ label, important = false }) => {

const style = {
  color: important ? 'tomato' : 'blue'
}

return <span className="todo_list_item" style={ style }>{ label }</span>
}

export default TodoListItem