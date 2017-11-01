import Field from './Field.js';

import RandomNumber from './Fields/RandomNumber.js';
import IpAddress from './Fields/IpAddress.js';

const GetComponentNameByItemData = ((item) => {
  let {type: t} = item;

  switch (t) {
    case 'ip_address':
      return IpAddress;
    case 'random_number':
      return RandomNumber;

    default:
      return Field;
  }
});

export default GetComponentNameByItemData;
