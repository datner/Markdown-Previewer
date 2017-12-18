import React, { Component } from 'react';
import './App.css';
import 'bulma'; //I TRIED EVERYTHING! LET ME IMPORT YOU STUPID STYLE
import Marked from 'marked';
import markdownIpsum from './markdown-ipsum';

// React Components
import WriteBox from './components/WriteBox';
import ReadBox from './components/ReadBox';


class App extends Component {
  constructor() {
    super()

    this.updateOutput = this.updateOutput.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.renderHTML = this.renderHTML.bind(this);
  
    this.state ={
      input: "test",
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
      <div className="App article">
        <div className="container">
          <div className="columns">
            <div className="column">
              <WriteBox input={ this.state.input } updateInput={ this.updateInput }/>
            </div>
            <div className="column">
              <article className="box article" dangerouslySetInnerHTML={ this.renderHTML() } >
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
