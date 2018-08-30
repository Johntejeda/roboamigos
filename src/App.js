import React, {Component} from 'react';
import Cardlist from './Cardlist.js';
import SearchBox from './SearchBox.js'
import {robots} from './robots.js';
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length
      ? <h1>Loading</h1>
      : (<div className='tc'>
        <h1 className='f2'>RoboAmigos</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Cardlist robots={filteredRobots}/>

      </div>);
  }
}

export default App;
