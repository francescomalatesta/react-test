import React, { Component } from 'react';

import Field from '../Field.js';

class RandomNumber extends Component {
  constructor(props) {
    super(props);

    this.handleMinValueChange = this.handleMinValueChange.bind(this);
    this.handleMaxValueChange = this.handleMaxValueChange.bind(this);
  }

  handleMinValueChange(event)
  {
    this.props.onPropertyChanged(this.props.fieldIndex, 'min_value', event.target.value);
  }

  handleMaxValueChange(event)
  {
    this.props.onPropertyChanged(this.props.fieldIndex, 'max_value', event.target.value);
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

        <input type="text" placeholder="Min Value..." value={this.props.minVal} onChange={this.handleMinValueChange} />
        -
        <input type="text" placeholder="Max Value..." value={this.props.maxVal} onChange={this.handleMaxValueChange} />
        -
      </Field>
    );
  }
}

export default RandomNumber;
