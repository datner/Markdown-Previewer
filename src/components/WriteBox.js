import React from 'react';
import PropTypes from 'prop-types';


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
                <h1 className="title"></h1>
                <textarea name="" id="" cols="100" rows="38" value={ this.props.input } onChange={this.props.updateInput} /> 
            </div>
        );
    }
}

writeBox.defaultProps = {
    
};

writeBox.propTypes = {
    
};

export default writeBox;
