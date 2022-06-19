import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class WishlistCard extends Component {
    render() {
        return (
            <li className='wishlistcard'>
                <Link to={this.props.link} rel="noopener noreferrer">{this.props.item}</Link>
            </li>
        )
    }
};

export default WishlistCard;