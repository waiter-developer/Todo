import React from 'react'

import './Item_status_filter.css'

const ItemStatusFilter = () => {
  return (
    <div className="btn-group item_status_filter">
      <button type="button"
              className="btn btn-info btn-sm">All</button>
      <button type="button"
              className="btn btn-outline-secondary btn-sm">Active</button>
      <button type="button"
              className="btn btn-outline-secondary btn-sm">Done</button>
    </div>
  )
}

export default ItemStatusFilter