import React from 'react';
import { withRouter } from 'react-router';

const ItemDetails = ({items, params, router}) => {
  let thisItem;
  items.forEach(item => {
    if(item.id === parseInt(params.id[1])){thisItem = item;
  }});
  return (
    <div>
      <h5>{thisItem.name}</h5>
      <h6>Happiness: {thisItem.happiness}</h6>
      <h6>Price: ${thisItem.price}</h6>
  </div>
  );
};

export default withRouter(ItemDetails);
