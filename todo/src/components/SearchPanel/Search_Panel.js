import React, {Component} from 'react'

import ItemStatusFilter from '../ItemStatusFilter'

import './Search_panel.css'

export default class SearchPanel extends Component {
  
  onInputBlur = () => {
    console.log(this.props)
  }
  
  render() {

    const searchText = 'Type here to search'

    return (
      <div className="search_panel">
        <input onBlur={this.onInputBlur} className="search_panel_input" placeholder={searchText} />
        < ItemStatusFilter/>
      </div>
    
    )
  }
}
