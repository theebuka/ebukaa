import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class pItem extends Component {
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

class rItem extends Component {
    render() {
        return (
            <div className="item">
                <div>
                    <span>{this.props.title}</span>
                    <span>{this.props.author}</span>
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

export {pItem, rItem};