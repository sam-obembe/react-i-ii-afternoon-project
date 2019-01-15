import React, { Component } from 'react';
import NameCard from './Components/NameCard'
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className = "header">
          <a href = "">Home</a> 
          <a href = "" id = "directory">Devmountain Directory</a>
        </header>

        <NameCard />
      </div>
    );
  }
}

export default App;
