import React from 'react'
import ReacDOM from 'react-dom'
import AppHeader from './components/App_Header'
import SearchPanel from './components/Search_Panel'
import TodoList from './components/Todo_list'

const App = () => {

  return (
    <div>  
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
  )
}


ReacDOM.render(<App/>,
  document.getElementById('root'))