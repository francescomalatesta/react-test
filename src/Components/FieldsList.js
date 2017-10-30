import React, { Component } from 'react';

import BuildComponentByItemData from './BuildComponentByItemData.js';
import AddNewFieldButton from './AddNewFieldButton.js';

import readFromLocalStorage from '../Utils/ReadFromLocalStorage.js';
import writeToLocalStorage from '../Utils/WriteToLocalStorage.js';

class FieldsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{
        type: 'first_name',
        name: 'First Name'
      }, {
        type: 'last_name',
        name: 'Last Name'
      }]
    }

    this.handleShowConsoleOutput = this.handleShowConsoleOutput.bind(this);
    this.handleLocalStorageSave = this.handleLocalStorageSave.bind(this);
    this.handleLocalStorageLoad = this.handleLocalStorageLoad.bind(this);
  }

  changeProperty(indexToBeUpdated, name, newValue) {
    let newItems = this.state.items.map((item, index) => {
      if(index === indexToBeUpdated) {
        if(name === 'type') {
          return {
            name: item.name,
            type: newValue
          };
        }

        item[name] = newValue;
      }

      return item;
    });

    this.setState(() => ({items: newItems}));
  }

  deleteItem(indexToBeRemoved) {
    let newItems = this.state.items.filter((item, index) => {
      return index !== indexToBeRemoved;
    });

    this.setState(() => ({items: newItems}));
  }

  addItem() {
    let items = this.state.items;
    items.push({
      type: 'first_name',
      name: ''
    });

    this.setState(() => ({items}));
  }

  handleShowConsoleOutput() {
    console.log(this.state);
  }

  handleLocalStorageSave() {
    writeToLocalStorage(this.state.items);
    alert('Data is now saved!');
  }

  handleLocalStorageLoad() {
    let items = readFromLocalStorage();
    this.setState(() => ({items}));
  }

  getElementByType(item, index) {
    return BuildComponentByItemData(item, index, this);
  }

  componentDidMount() {
    this.handleLocalStorageLoad();
  }

  render() {
    if(this.state.items.length === 0) {
      return <i>No items so far... click on "Add New Field" button.</i>
    }

    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => {
            return this.getElementByType(item, index);
          })}
        </ul>

        <hr />

        <AddNewFieldButton onAdd={this.addItem.bind(this)} />
        <button type="button" onClick={this.handleShowConsoleOutput}>Show Console Output</button>

        <hr />

        <button type="button" onClick={this.handleLocalStorageSave}>Save to Local Storage</button>
        <button type="button" onClick={this.handleLocalStorageLoad}>Load from Local Storage</button>
      </div>
    );
  }
}

export default FieldsList;
