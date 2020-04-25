import React, { Component } from 'react'

import './Todo_List_item.css'


export default class TodoListItem extends Component {

  onLabelClick = () => {
    console.log(`Done: ${this.props.label}`)
  }

  
    render() {

      const { label, important = false } = this.props

      const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
      }
      
      return ( 
        <span className="todo_list_item">
          <span className="todo_list_item_label" 
                style={ style }
                onClick={ this.onLabelClick } >
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
}



