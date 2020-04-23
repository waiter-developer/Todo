import React from 'react'
import TodoListItem from './Todo_List_Item'
const items = ['Learn React To Go', 'Build Awesome', 'Next step']

const TodoList = () => {
  return (
    <ul className="foo">
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
      <li><TodoListItem label="It's okey!"
      important /></li>
      <li><TodoListItem 
      label="Everything excellent!" 
      important /></li>
      <li><TodoListItem 
      label="How are you?" 
      important /></li>
    </ul>
  )
}

export default TodoList