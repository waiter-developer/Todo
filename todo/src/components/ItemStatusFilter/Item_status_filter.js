import React, { Component } from 'react'

import './Item_status_filter.css'

export default class ItemStatusFilter extends Component {
   
  buttons = [
    {name: 'all', label: 'ALL'},
    {name: 'active', label: 'ACTIVE'},
    {name: 'done', label: 'DONE'}
  ]


  render() {

    const {filter, onFilterChange} = this.props
    
    const buttons = this.buttons.map(({name, label}) => {

      const isActive = filter === name
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'

      return (
        <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => onFilterChange(name)}>
            {label}
        </button>
      )
    })
    return (
      <div className="btn-group item_status_filter">
        {buttons}
      </div>
    )
  }
}
