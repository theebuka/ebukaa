import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ListCard extends Component {
    render() {
        return (
            <li className='listcard'>
                <Link to={this.props.link} rel="noopener noreferrer">{this.props.item}</Link>
                <span>{this.props.attribution}</span>
            </li>
        )
    }
};

class ListCardSection extends Component {
    render() {
        return (
            <ul className='listcard-section'>
                <h1 className='listcard-section-header'>{this.props.header}</h1>
                {this.props.children}
            </ul>
        )
    }
};

export { ListCard, ListCardSection };