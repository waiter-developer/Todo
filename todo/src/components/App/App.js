import React, {Component} from 'react'

import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import TodoList from '../TodoList'
import AddNewItem from '../AddNewItem'

import './App.css'

export default class App extends Component {

  maxId = 4


  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1},
      { label: 'Make awesome App', important: false, id: 2},
      { label: 'Have a lunch', important: false, id: 3}
    ]
  }
  
  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
     
      
      const before = todoData.splice(0, idx)
      const after = todoData.splice(idx + 1 )
      
      const newArr = [...before, ...after]
      return {
        todoData: newArr
      }
    })
  }

  addNewItem = (text) => {
    const newItem = {
      label: text, 
      import: false, 
      id: this.maxId++
    }

    this.setState(({todoData}) => {
      const newArr = [
        newItem,
        ...todoData
      ]

      return {
        todoData: newArr
      }
    })

  }


  render() {
    const {todoData} = this.state
  
    return (
      <div className="container App_main_container">
          <div className="App_doashbord_list">  
            <AppHeader todo={1} done={3} />
            <SearchPanel />
            <TodoList todos={todoData}  onDeleted={this.deleteItem}/>
            
          </div>
          <div className="App_add_new_item">
            <AddNewItem onAddedItem={this.addNewItem} />
           </div>
      </div>  
    )
  }
}
