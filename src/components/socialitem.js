import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SocialItemBlock extends Component {
    render() {
        return (
            <a href={this.props.path} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={this.props.iconName} size="1x" className="social-icon"/>
            </a>
        )
    }
};

export {SocialItemBlock};
