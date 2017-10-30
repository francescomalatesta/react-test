import React, { Component } from 'react';

import Field from '../Field.js';

class IpAddress extends Component {
  constructor(props) {
    super(props);

    this.handleVersionChange = this.handleVersionChange.bind(this);
  }

  handleVersionChange(event) {
    this.props.onPropertyChanged(this.props.fieldIndex, 'version', event.target.value);
  }

  render() {
    return (
      <Field
        fieldIndex={this.props.fieldIndex}
        key={this.props.fieldIndex}
        name={this.props.name}
        type={this.props.type}
        onDelete={this.props.onDelete}
        onPropertyChanged={this.props.onPropertyChanged}>

        <select value={this.props.version} onChange={this.handleVersionChange}>
          <option value="ip_v4">IP v4</option>
          <option value="ip_v6">IP v6</option>
        </select>
        -
      </Field>
    );
  }
}

export default IpAddress;
