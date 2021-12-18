/*
import react
import app
create list component that handles each grocery element entered by client passed through app
export

*/

import React from 'react';
import GroceryItem from './GroceryItem.jsx'


function List (props) {

  // return (
  //   <ul>
  //       {props.groceryData.map((element) => {
  //       <GroceryItem item={element}/>
  //         })
  //       }
  //   </ul>
  // )

  return (
  <ul>
    {props.groceryData.map((element, index) =>
    <GroceryItem item={element} key={index}/>
    )}
  </ul>
  )

}



export default List;




   //console.log(props.groceryData)

  // return (
  //   <ul className="groceries">
  //         <li>
  //           <span> frozen pizza </span>
  //           <span> 5 </span>
  //         </li>
  //         <li>
  //           <span> noosa yogurt </span>
  //           <span> 10 </span>
  //         </li>
  //         <li>
  //           <span> wine </span>
  //           <span> 2 </span>
  //         </li>
  //         <li>
  //           <span> iced coffe </span>
  //           <span> 1 </span>
  //         </li>
  //         <li>
  //           <span> a </span>
  //           <span> 1 </span>
  //         </li>
  //         <li>
  //           <span> pizza </span>
  //           <span> 1 </span>
  //         </li>
  //       </ul>
  // )