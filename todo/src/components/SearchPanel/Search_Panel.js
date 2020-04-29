import React, {Component} from 'react'

import ItemStatusFilter from '../ItemStatusFilter'

import './Search_panel.css'

export default class SearchPanel extends Component {
  
  onInputBlur = (e) => {
    console.log(e.target.value)
  }
  
  render() {

    const searchText = 'Type here to search'

    return (
      <div className="search_panel">
        <input onChange={this.onInputBlur} 
                className="search_panel_input" 
                placeholder={searchText} />
        < ItemStatusFilter/>
      </div>
    
    )
  }
}
