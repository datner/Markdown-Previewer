import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bulma-0.6.1/css/bulma.css';

// React Components
import WriteBox from './components/WriteBox';

class App extends Component {
  render() {
    return (
      <div className="App article">
        <div className="container">
          <div className="columns">
            <div className="column">
              <WriteBox />
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
