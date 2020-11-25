import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <span className=""></span>
                <Link to="/" className="">Ebuka Nwaju</Link>
            </div>
        )
    }
};

export default Logo;