import React, { Component } from 'react';

import GetComponentNameByItemData from './GetComponentNameByItemData.js';
import AddNewFieldButton from './AddNewFieldButton.js';

import readFromLocalStorage from '../Utils/ReadFromLocalStorage.js';
import writeToLocalStorage from '../Utils/WriteToLocalStorage.js';

class FieldsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }

    this.handleShowConsoleOutput = this.handleShowConsoleOutput.bind(this);
    this.handleLocalStorageSave = this.handleLocalStorageSave.bind(this);
    this.handleLocalStorageLoad = this.handleLocalStorageLoad.bind(this);

    this.handlePropertyChange = this.handlePropertyChange.bind(this);
    this.handleItemDeletion = this.handleItemDeletion.bind(this);

    this.handleItemAdd = this.handleItemAdd.bind(this);
  }

  handlePropertyChange(indexToBeUpdated, name, newValue) {
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

  handleItemDeletion(indexToBeRemoved) {
    let newItems = this.state.items.filter((item, index) => {
      return index !== indexToBeRemoved;
    });

    this.setState(() => ({items: newItems}));
  }

  handleItemAdd() {
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

  componentDidMount() {
    this.handleLocalStorageLoad();
  }

  render() {
    let itemsToRender;

    if(this.state.items.length === 0) {
      itemsToRender = (
        <p><i>No items so far... click on "Add New Field" button.</i></p>
      );
    } else {
      itemsToRender = (
        <ul>
          {this.state.items.map((item, index) => {
            let FieldComponent = GetComponentNameByItemData(item);

            return (
              <FieldComponent
                fieldIndex={index}
                key={index}

                onDelete={this.handleItemDeletion}
                onPropertyChanged={this.handlePropertyChange}

                {...item}
                />
            );
          }, this)}
        </ul>
      );
    }

    return (
      <div>
        {itemsToRender}

        <hr />

        <AddNewFieldButton onAdd={this.handleItemAdd} />
        <button type="button" onClick={this.handleShowConsoleOutput}>Show Console Output</button>

        <hr />

        <button type="button" onClick={this.handleLocalStorageSave}>Save to Local Storage</button>
        <button type="button" onClick={this.handleLocalStorageLoad}>Load from Local Storage</button>
      </div>
    );
  }
}

export default FieldsList;
