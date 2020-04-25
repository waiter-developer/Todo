import React from 'react'

import './App_Header.css'

const AppHeader = ({todo, done}) => {

return (

  <div className="app_header d-flex">
      <h1>My Todo List</h1>
      <h2>{todo} more to do, {done}done</h2>
  </div>
)
}

export default AppHeader