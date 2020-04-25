import React from 'react'

import './Todo_List_item.css'

const TodoListItem = ({ label, important = false }) => {

const style = {
  color: important ? 'steelblue' : 'black',
  fontWeight: important ? 'bold' : 'normal'
}

return ( 
  <span className="todo_list_item">
    <span className="todo_list_item_label" 
                style={ style }>
                  { label }
    </span>

  <button type="button"
          className="btn btn-outline-success btn-sm">
    <i className="fa fa-exclamation" />
  </button>
  <button type="button" 
          className="btn btn-outline-danger btn-sm">
      <i className="fa fa-trash-o" />
  </button>

  </span>

)
}

export default TodoListItem