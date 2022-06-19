import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ResourceCard extends Component {
    render() {
        return (
            <li className='resourcecard'>
                <Link to={this.props.link} rel="noopener noreferrer">{this.props.resource}</Link>
                <span>{this.props.summary}</span>
            </li>
        )
    }
};

export default ResourceCard;