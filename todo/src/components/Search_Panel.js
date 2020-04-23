import React from 'react'

const SearchPanel = () => {

  const searchText = 'Type here to search'
  
  const searchStyle = {
    paddingTop: "0.5rem",
    paddingBottom: '0.5rem',
    paddingLeft: '10px',
    fontSize: '1rem',
    backgroundColor: 'black',
    color: 'green',
    border:'1px solid red',
    borderRadius: '5px'
  }
  return <input 
  type="phone" 
  placeholder={searchText} 
  style={searchStyle} 
   />
}

export default SearchPanel