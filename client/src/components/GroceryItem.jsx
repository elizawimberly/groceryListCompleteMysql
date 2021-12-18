import React from 'react';

function GroceryItem (props) {

  return (
    <li>
      <span>{props.item.item}   </span>
      <span>{props.item.quantity}</span>
    </li>
  )
}


export default GroceryItem;

//get each item from props
//render it to the dom
//return li tag item
//get item.item and item.quantity

{/* <span>{props.item.item}</span>
<span>{props.item.quantity}</span> */}