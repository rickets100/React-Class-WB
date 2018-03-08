import React, { Component } from 'react'

class Fish extends Component {
  render() {
    return (
      <li className="menu-fish">
        <img src={this.props.details.image} alt={this.props.details.name} />
      </li>
    )
  }
}

export default Fish;
