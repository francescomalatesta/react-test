import React, { Component } from 'react';

class AddNewFieldButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onAdd();
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>+ Add New Field</button>
    );
  }
}

export default AddNewFieldButton;
