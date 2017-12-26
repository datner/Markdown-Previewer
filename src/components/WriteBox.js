import React from 'react';
import PropTypes from 'prop-types';

// React Components
import Dropzone from 'react-dropzone';

class writeBox extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            input: this.props.input
        }
    }

    render() {
        return (
            <div className="box">
                <h1 className="title">Enter Markdown</h1>
                <textarea cols="10" rows="10" value={ this.props.input } onChange={this.props.updateInput} />
                <Dropzone style={{ height: '10%', width: '100%', border: 'solid 1px black'}}
                        multiple='false'
                        onDrop={ this.props.onDrop }
                        >
                    <span>Either drag and drop a markdown .txt file on to me, or click me to open a dialog :)</span>
                </Dropzone>
            </div>
        );
    }
}

export default writeBox;
