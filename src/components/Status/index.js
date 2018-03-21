import React, { Component } from 'react';
import './styles.css';

class Status extends Component {

    renderButtonStyle(style) {
        switch(style.toLowerCase()) {
            case 'active':
                return 'activeButton';
            case 'inactive':
                return 'inactiveButton';
            case 'in progress':
                return 'inprogressButton';
            default:
                return 'unknownButton';
        }
    }

    render() {
        return (
            <button className={this.renderButtonStyle(this.props.status)}>{this.props.status}</button>
        );
    }
}

export default Status;