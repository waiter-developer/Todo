import React from 'react'

import ItemStatusFilter from '../ItemStatusFilter'

import './Search_panel.css'

const SearchPanel = () => {

  const searchText = 'Type here to search'
  
  return (
    <div className="search_panel">
      <input className="search_panel_input" placeholder={searchText} />
      < ItemStatusFilter/>
    </div>
  
  )
}

export default SearchPanel