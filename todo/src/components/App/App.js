import React from 'react'

import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import TodoList from '../TodoList'

import './App.css'

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1},
    { label: 'Make awesome App', important: false, id: 2},
    { label: 'Have a lunch', important: false, id: 3}
  ]

  return (
  <div className="container">  
    <AppHeader todo={1} done={3} />
    <SearchPanel />
    <TodoList todos={todoData} />
  </div>
  )
}


export default App