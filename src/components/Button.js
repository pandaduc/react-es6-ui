import React, { Component, PropTypes } from 'react';

const propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.url,
    disabled: PropTypes.disabled
};

const defaultProps = {
    className: 'button',
    text: 'Button'
};

class Button extends Component {
        
    constructor(props) {
        super(props);                
    }
        
    render() {
        
        const tag = 'button';
                
        return (
            <button {...this.props}>
                {this.props.text}
            </button>
        )
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;