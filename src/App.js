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

    this.updateOutput = this.updateOutput.bind(this);
    this.getHTML = this.getHTML.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.onDrop = this.onDrop.bind(this);
  
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

  getHTML() {
    return { __html: this.state.output}
  }

  updateInput(e) {
    const input = e.target ? e.target.value : e ;

    this.setState({ input }, _ => this.updateOutput(input));
  }

  onDrop(acceptedFiles) {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = _ => {
        const fileAsBinaryString = reader.result;
        this.updateInput(fileAsBinaryString);
      }
      reader.readAsBinaryString(file);
    })
  }

  render() {
    return (
      <div className="App hero is-fullheight">
          <div className="container">
            <div className="columns">
              <div className="column">
                <WriteBox input={ this.state.input }
                          html={ this.state.output }
                          updateInput={ this.updateInput }
                          onDrop={ this.onDrop }
                          />
              </div>
              <div className="column">
                <ReadBox getHTML={this.getHTML} />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;