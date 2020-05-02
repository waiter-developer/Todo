import React, {Component} from 'react'

import ItemStatusFilter from '../ItemStatusFilter'

import './Search_panel.css'

export default class SearchPanel extends Component {
  
  state = {
    term: ''
  }
  
  onSearchChange = (e) => {
    const term = e.target.value

    this.setState({term})
    this.props.onSearchChange(term)
  }
  render() {
    
    const searchText = 'Type here to search'

    return (
      <div className="search_panel">
        <input  type="text"
                className="search_panel_input" 
                placeholder={searchText} 
                value={this.state.term} 
                onChange={this.onSearchChange}
                />
        < ItemStatusFilter filter={this.props.filter}
                            onFilterChange={this.props.onFilterChange}/>
      </div>
    
    )
  }
}
