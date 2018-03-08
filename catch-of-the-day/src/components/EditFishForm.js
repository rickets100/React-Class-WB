import React, { Component } from 'react'

class EditFishForm extends Component {
  render() {
    return (
      <div className="fish-edit">
        <input type="text" name="name" />
        <input type="text" name="price" />
        <select type="text" name="status">
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc"></textarea>
        <input type="text" name="image" />
      </div>
    )
  }
}

export default EditFishForm;
