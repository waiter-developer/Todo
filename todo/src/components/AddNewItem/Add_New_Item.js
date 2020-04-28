import React, {Component} from 'react'


import './Add_New_Item.css'

export default class AddNewItem extends Component {

  

  render() {

    

    return (
      <div className="Add_new_item">
        <button type="submit"
                className="btn btn-outline-primary btn-sm float-right"
                onClick={() => this.props.onAddedItem(' Hi people')}>
          Add a new Item
        </button>
      </div>
    )
  }
}