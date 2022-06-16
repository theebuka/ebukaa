import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SpaceMenuItem extends Component {
    render() {
        return (
            <li className="space-item">
                <Link to={this.props.link}>{this.props.title}</Link>
                <span>{this.props.summary}</span>    
            </li>
        )
    }
}

export default SpaceMenuItem;