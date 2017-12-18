import React from 'react';
import PropTypes from 'prop-types';


class writeBox extends React.Component {
    constructor(props, context) {
        super(props, context);
        
    }

    render() {
        return (
            <div className="box">
                <h1 className="title">Input Markdown</h1>
                <textarea name="" id="" cols="100" rows="38" />
            </div>
        );
    }
}

writeBox.defaultProps = {
    
};

writeBox.propTypes = {
    
};

export default writeBox;
