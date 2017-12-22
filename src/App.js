import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Marked from 'marked';

// React Components
import WriteBox from './components/WriteBox';
import ReadBox from './components/ReadBox';


class App extends Component {
  constructor() {
    super()

    this.updateOutput = debounce(this.updateOutput.bind(this),100);
    this.updateInput = this.updateInput.bind(this);
    this.renderHTML = this.renderHTML.bind(this);
  
    this.state ={
      input: "# Hello World!",
    }
  }

  componentDidMount() {
    this.setState({ output: Marked(this.state.input)})
  }

  updateOutput(text) {
    const output = Marked(text);

    this.setState({ output });
  }

  updateInput(e) {
    const input = e.target.value;

    this.setState({ input }, _ => this.updateOutput(input));
  }

  renderHTML(){
    return { __html: this.state.output }
  }

  render() {
    return (
      <div className="App hero is-fullheight">
          <div className="container">
            <div className="columns">
              <div className="column">
                <WriteBox input={ this.state.input } updateInput={ this.updateInput }/>
              </div>
              <div className="column">
                <ReadBox output={ this.state.output } />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
      
    
function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}