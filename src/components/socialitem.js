import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SocialItem extends Component {
    render() {
        return (
            <li className="social-list-item">
                <a href={this.props.path} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={this.props.iconName} className="social-icon"/>
                </a>
            </li>
        )
    }
};

export default SocialItem;
