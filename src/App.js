
import './App.css';
import React, { Component } from 'react';
import Menu from "./Menu"
import { DISHES } from './dishes';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
 
  render() {
  
    return(
      <div className="App">
        <Menu dishes={this.state.dishes}/> 
      </div>
    )
  }

}

export default App;
