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
    ],
    term: '', 
    filter: 'all' //active, all, done
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
     
      const newArr = [...todoData.slice(0, idx), 
                      ...todoData.slice(idx + 1 )
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
        ...todoData,
        newItem
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

        return [...arr.slice(0, idx), 
        newItem,
        ...arr.slice(idx + 1 )
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

  search(items, term) {
    if(term.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }

  onSearchChange = (term) => {
    this.setState({ term })
  }

  filter(items, filter) {

      switch(filter) {
        case 'all':
          return items
        case 'active':
          return items.filter((item) => !item.done)
        case 'done':
          return items.filter((item) => item.done)
        default:
          return items
      }
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  render() {
    
    const {todoData, term, filter} = this.state

    const visibleItems = this.filter(this.search(todoData, term), filter)

    const doneCount = todoData.filter((el) => el.done).length

    const todoCount = todoData.length - doneCount
    
  
    return (
      <div className="container App_main_container">
          <div className="App_doashbord_list">  
            <AppHeader todo={todoCount} done={doneCount} />
            <SearchPanel  onSearchChange={this.onSearchChange} 
                          filter={filter} 
                          onFilterChange={this.onFilterChange}/>
            <TodoList todos={visibleItems}  
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
