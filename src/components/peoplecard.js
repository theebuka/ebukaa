import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class PeopleCard extends Component {
    render() {
        return (
            <li className='peoplecard'>
                <Link to={this.props.contact} rel="noopener noreferrer">{this.props.person}</Link>
                <span>{this.props.specialty}</span>
            </li>
        )
    }
};

export default PeopleCard;