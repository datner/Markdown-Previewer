import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bulma-0.6.1/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="App hero">
        <div className="container">
          <div className="columns">
            <div className="column">
              write area
            </div>
            <div className="column">
              read area
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
