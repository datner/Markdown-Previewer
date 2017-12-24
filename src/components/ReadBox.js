import React from 'react';
import PropTypes from 'prop-types';

// React Components
import Dropzone from 'react-dropzone';

class ReadBox extends React.Component {

    render() {
        return (
            <div className="box">
                <h1 className="title">Compiled Markdown</h1>
                <iframe srcdoc={this.props.output} height="100%" width="100%" frameborder="0"></iframe>
            </div>
        );
    }
}


export default ReadBox;
