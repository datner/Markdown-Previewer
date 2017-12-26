import React from 'react';
import PropTypes from 'prop-types';

// React Components
import Dropzone from 'react-dropzone';

class ReadBox extends React.Component {

    render() {
        return (
            <div className="box">
                <h1 className="title">Compiled Markdown</h1>
                <hr />
                <div className="content" dangerouslySetInnerHTML={this.props.getHTML()}></div>
            </div>
        );
    }
}


export default ReadBox;
