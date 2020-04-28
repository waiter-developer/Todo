import React, { Component } from 'react'

import './Todo_List_item.css'


export default class TodoListItem extends Component {

    
    render() {

      const { label, onDeleted,
              onToggleImportant,
              onToggleDone,
              done, important} = this.props
      
    
      let classNames = 'todo_list_item'
      if(done){
        classNames += ' done'
      }

      if(important) {
        classNames += ' important'
      }


      return ( 
        <span className={classNames}>
          <span className="todo_list_item_label" 
                onClick={ onToggleDone} >
            { label }
          </span>
      
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>
        <button type="button" 
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
            <i className="fa fa-trash-o" />
        </button>
      
        </span>
      
      )
      }
}



