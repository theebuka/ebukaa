import React, { Component } from 'react';
// import LocomotiveScroll from "locomotive-scroll";
import Social from './social.js';
// import {Facebook, Twitter, Instagram} from 'feather-icons'

class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <div className="top">
                    <Social />
                </div>
                <div className="bottom">
                    <span>
                        All Rights Reserved &copy; {new Date().getFullYear()} Ebuka Nwaju
                    </span>
                </div>
            </footer>
        )
    }
}

export default Footer;