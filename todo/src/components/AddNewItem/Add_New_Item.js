import React, {Component} from 'react'


import './Add_New_Item.css'

export default class AddNewItem extends Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }
  
  onSubmit = (e) => {
    e.preventDefault()
    this.props.onAddedItem(this.state.label)
    this.setState({
      label: ''
    })
  }

  render() {
    
    return (
      <form className="Add_new_item d-flex" onSubmit={this.onSubmit}>
        <input type="text" 
               className="form-control float-left" 
                onChange={this.onLabelChange} 
                placeholder="What needs to be done" 
                value={this.state.label} />
        <button type="submit"
                className="btn btn-outline-primary btn-sm float-right"
                >
          Add a new Item
        </button>
      </form>
    )
  }
}