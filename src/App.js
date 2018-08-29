import React from 'react';
import Cardlist from './Cardlist.js';
import SearchBox from './SearchBox.js'
import {robots} from './robots.js';

const App = () =>{
  return (
    <div>
       <h1>RoboAmigos</h1>
       <SearchBox />
       <Cardlist robots={robots} />

    </div>
  );
}

export default App;
