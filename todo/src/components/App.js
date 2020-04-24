import React from 'react'

import AppHeader from './App_Header'
import SearchPanel from './Search_Panel'
import TodoList from './Todo_list'

import './App.css'

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1},
    { label: 'Make awesome App', important: true, id: 2},
    { label: 'Have a lunch', important: false, id: 3}
  ]

  return (
  <div className="container">  
    <AppHeader />
    <SearchPanel />
    <TodoList todos={todoData} />
  </div>
  )
}


export default App