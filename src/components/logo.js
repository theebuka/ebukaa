import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <span className="horizontal-bar"></span>
                <Link to="/" className="">Ebuka<br/>Nwaju</Link>
            </div>
        )
    }
};

export default Logo;