import React, {Component} from 'react'

import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import TodoList from '../TodoList'
import AddNewItem from '../AddNewItem'

import './App.css'

export default class App extends Component {

  maxId = 100


  state = {
    todoData: [
      this.createTodoItem('Drink Coffe'),
      this.createTodoItem('Make awesome app'),
      this.createTodoItem('Have a lunch')
    ]
  }
  
  createTodoItem(label) {
    
    return {
      label, 
      done: false,
      import: false, 
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
     
      
      const newArr = [...todoData.splice(0, idx), 
                      ...todoData.splice(idx + 1 )
                      ]
      return {
        todoData: newArr
      }
    })
  }

  addNewItem = (text) => {
    const newItem = this.createTodoItem(text)

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

  onToggleProperty(arr, id, propName) {
    
      const idx = arr.findIndex((el) => el.id === id)

      const oldItem = arr[idx]
      const newItem = {...oldItem,
                       [propName]: !oldItem[propName]
                      }

        return [...arr.splice(0, idx), 
        newItem,
        ...arr.splice(idx + 1 )
        ]

  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {

      return {
        todoData: this.onToggleProperty(todoData, id, 'important')
      }
  })
  }

  onToggleDone = (id) => {
    
    this.setState(({todoData}) => {

        return {
          todoData: this.onToggleProperty(todoData, id, 'done')
        }
    })
    
  }

  render() {
    const {todoData} = this.state

    const doneCount = todoData.filter((el) => el.done).length

    const todoCount = todoData.length - doneCount
    
  
    return (
      <div className="container App_main_container">
          <div className="App_doashbord_list">  
            <AppHeader todo={todoCount} done={doneCount} />
            <SearchPanel />
            <TodoList todos={todoData}  
                      onDeleted={this.deleteItem}
                      onToggleImportant={this.onToggleImportant} 
                      onToggleDone={this.onToggleDone} />
            
          </div>
          <div className="App_add_new_item">
            <AddNewItem onAddedItem={this.addNewItem} />
           </div>
      </div>  
    )
  }
}
