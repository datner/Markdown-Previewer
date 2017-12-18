import React from 'react';
import PropTypes from 'prop-types';


class ReadBox extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.renderHTML = this.renderHTML.bind(this);
    }

    renderHTML() {
        let el = document.createElement('article');
        el.innerHTML = this.props.output
    }

    render() {
        return (
            <div className="box">
                { this.props.output }
            </div>
        );
    }
}

ReadBox.defaultProps = {
    
};

ReadBox.propTypes = {
    
};

export default ReadBox;
