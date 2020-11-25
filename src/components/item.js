import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Item extends Component {
    render() {
        return (
            <div className="item">
                <div>
                    <span>{this.props.track}</span>
                    <span>{this.props.artiste}</span>
                </div>
                <div>
                    <span>{this.props.year}</span>
                    <span>{this.props.genre}</span>
                    <span>{this.props.rating} <FontAwesomeIcon icon={["fas","star"]} /></span>
                </div>
            </div>
        )
    }
};

export default Item;