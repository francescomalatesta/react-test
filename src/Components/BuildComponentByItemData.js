import React from 'react';

import Field from './Field.js';

import RandomNumber from './Fields/RandomNumber.js';
import IpAddress from './Fields/IpAddress.js';

const BuildComponentByItemData = ((item, index, context) => {
  if(item.type === 'ip_address') {
    item.version = (item.version !== undefined) ? item.version : "ip_v4";

    return (
      <IpAddress
        fieldIndex={index}
        key={index}
        name={item.name}
        type={item.type}
        onDelete={context.deleteItem.bind(context)}
        onPropertyChanged={context.changeProperty.bind(context)}
        version={item.version}
        />
    );
  }

  if(item.type === 'random_number') {
    item.min_value = (item.min_value !== undefined) ? item.min_value : "0";
    item.max_value = (item.max_value !== undefined) ? item.max_value : "10";

    return (
      <RandomNumber
        fieldIndex={index}
        key={index}
        name={item.name}
        type={item.type}
        onDelete={context.deleteItem.bind(context)}
        onPropertyChanged={context.changeProperty.bind(context)}
        minVal={item.min_value}
        maxVal={item.max_value}
        />
    );
  }

  return (
    <Field
      fieldIndex={index}
      key={index}
      name={item.name}
      type={item.type}
      onDelete={context.deleteItem.bind(context)}
      onPropertyChanged={context.changeProperty.bind(context)}
      />
  );
});

export default BuildComponentByItemData;
