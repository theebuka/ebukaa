import React, {Component} from 'react';
// import {Facebook, Instagram, Twitter} from 'react-feather'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* class SocialItem extends Component {
    render() {
        return (
            <li className="social-list-item">
                <a href={this.props.path} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={this.props.iconName} className="social-icon"/>
                </a>
            </li>
        )
    }
} */

class SocialItemBlock extends Component {
    render() {
        return (
            <div className="contact-social-list">
                <a href={this.props.path} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={this.props.iconName} size="lg" className="social-icon"/>
                </a>
            </div>
        )
    }
};

export {SocialItemBlock};
