import React, { Component } from 'react';

import Field from '../Field.js';

class RandomNumber extends Component {
  constructor(props) {
    super(props);

    this.handleMinValueChange = this.handleMinValueChange.bind(this);
    this.handleMaxValueChange = this.handleMaxValueChange.bind(this);

    if(this.props.minValue === RandomNumber.defaultProps.minValue) {
      this.props.onPropertyChanged(this.props.fieldIndex, 'minValue', RandomNumber.defaultProps.minValue);
    }

    if(this.props.maxValue === RandomNumber.defaultProps.maxValue) {
      this.props.onPropertyChanged(this.props.fieldIndex, 'maxValue', RandomNumber.defaultProps.maxValue);
    }
  }

  handleMinValueChange(event)
  {
    this.props.onPropertyChanged(this.props.fieldIndex, 'minValue', event.target.value);
  }

  handleMaxValueChange(event)
  {
    this.props.onPropertyChanged(this.props.fieldIndex, 'maxValue', event.target.value);
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

        <input type="text" placeholder="Min Value..." value={this.props.minValue} onChange={this.handleMinValueChange} />
        -
        <input type="text" placeholder="Max Value..." value={this.props.maxValue} onChange={this.handleMaxValueChange} />
        -
      </Field>
    );
  }
}

RandomNumber.defaultProps = {
  minValue: "0",
  maxValue: "10"
};

export default RandomNumber;
