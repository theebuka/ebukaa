import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import LogoImage from './../images/m1-Artboard 4.svg';

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                {/* <span className="horizontal-bar"></span>
                <Link to="/" className="">Ebuka<br/>Nwaju</Link> */}
                {/* <Link to="/" className=""> */}
                    <img src={LogoImage} alt="ebuka nwaju's logo" className="logo-image" />
                {/* </Link> */}
            </div>
        )
    }
};

export default Logo;