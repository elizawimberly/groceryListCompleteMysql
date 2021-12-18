/*
import react

create app component

export class
*/

import React from 'react';
import List from './List.jsx'
import groceryData from '../../../database/groceriesData.js'
//const axios = require('axios').default;
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //groceryData: groceryData,
      groceryData: [],
      item: '',
      quantity: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGetRequest = this.handleGetRequest.bind(this);
    this.handlePostRequest = this.handlePostRequest.bind(this);
  }

  componentDidMount() {
    this.handleGetRequest();
  }

  handleChange (event) {
    const target = event.target;
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    })

  }


  handleSubmit (event) {
    event.preventDefault();
    const name = event.target.name;
    const itemVal = this.state.item;
    const quantityVal = this.state.quantity;
    const newData = {
      item: itemVal,
      quantity: quantityVal
    }
    this.handlePostRequest(event);
    this.setState({
      groceryData: [newData, ...this.state.groceryData],
      item: '',
      quantity: ''
    })
  }

  handleGetRequest (event) {

    axios.get("http://localhost:3000/api/main")
    .then((response) => {
      var groceryDataResponse = response.data
      console.log(response.data)
      this.setState({
        // groceryData: [...this.state.groceryData, groceryDataResponse]
        groceryData: [...response.data]
      })
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  handlePostRequest (event) {
    console.log(this.state.item, this.state.quantity)
    axios.post('http://localhost:3000/api/main', {
      item: this.state.item,
      quantity: this.state.quantity
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
  }


  render () {
    return (
      <div>
        <img src="grocery-bags.png"/>
        <h1>Grocery List from React</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Item
            <input name="item" value={this.state.item} onChange={this.handleChange}/>
          </label>
          <label> Quantity
            <input name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
          </label>
          <button type="submit">Add Grocery</button>
        </form>
        <button onClick={this.handleGetRequest}>GET REQUEST CLICK ME</button>
        <button onClick={this.handlePostRequest}>POST REQUEST CLICK ME</button>
        <List groceryData={this.state.groceryData}/>
      </div>
    )
  }
}


export default App;

//second update:
{/* <div>
<img src="grocery-bags.png"/>
<h1>Grocery List from React</h1>
<form>
  <label> Item
    <input name="item" value={this.state.item}/>
  </label>
  <label> Quantity
    <input name="quantity" value=""/>
  </label>
  <button>Add Grocery</button>
</form>
<List groceryData={this.state.groceryData}/>
</div> */}



{/* <ul class="groceries">
<li>
  <span> frozen pizza </span>
  <span> 5 </span>
</li>
<li>
  <span> noosa yogurt </span>
  <span> 10 </span>
</li>
<li>
  <span> wine </span>
  <span> 2 </span>
</li>
<li>
  <span> iced coffe </span>
  <span> 1 </span>
</li>
<li>
  <span> a </span>
  <span> 1 </span>
</li>
<li>
  <span> pizza </span>
  <span> 1 </span>
</li>
</ul> */}