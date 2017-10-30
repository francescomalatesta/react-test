import React, { Component } from 'react';

class Field extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleDeleteClick() {
    this.props.onDelete(this.props.fieldIndex);
  }

  handleTypeChange(e) {
    this.props.onPropertyChanged(this.props.fieldIndex, 'type', e.target.value);
  }

  handleNameChange(e) {
    this.props.onPropertyChanged(this.props.fieldIndex, 'name', e.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Insert field name..."
          value={this.props.name}
          onChange={this.handleNameChange}
        />
         -
        <select value={this.props.type} onChange={this.handleTypeChange}>
          <option value="first_name">First Name</option>
          <option value="last_name">Last Name</option>
          <option value="random_number">Random Number</option>
          <option value="ip_address">IP Address</option>
        </select>
         -
         {this.props.children}
        <button type="button" onClick={this.handleDeleteClick}>Delete</button>
      </div>
    );
  }
}

export default Field;
