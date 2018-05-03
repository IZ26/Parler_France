import React, { Component } from 'react';
import {imagesLibrary} from './img/imageLibrary';
import './css/App.css';
import NavBar from './components/navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
              <img src={imagesLibrary.logo} className="App-logo" alt="logo" />
          </header>
          <NavBar/>
      </div>
    );
  }
}

export default App;
