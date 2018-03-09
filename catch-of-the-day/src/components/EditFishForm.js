import React, { Component } from 'react'

class EditFishForm extends Component {
  handleChange = event => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    // [event.currentTarget.name] above is a way of having a dynamic key
    this.props.updateFish(this.props.index, updatedFish);
    console.log(updatedFish);
  };

  render() {
    const props = this.props.fish;

    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={props.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={props.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={props.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={props.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={props.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
