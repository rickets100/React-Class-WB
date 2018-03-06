import React, {Component} from 'react';
import { render } from 'react-dom';

class StorePicker extends Component {
  render() {
    return (
      <form className="store-selector">
      <h2>Please Enter a Store</h2>
      <input type="text" required placeholder="Store Name" />
      <button type="submit">Visit</button>
      </form>
    )
  }
}

export default StorePicker;
