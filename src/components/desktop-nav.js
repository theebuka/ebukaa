import React, {Component} from 'react';
import Navitem from './navitem.js';

class Navigation extends Component {
    render() {
        return (
            <nav className="desktop-nav">
                <div>
                    <ul className="desktop-nav-list">
                        <Navitem path="/" label="home" />
                        {/* <Navitem path="/about" label="About" /> */}
                        <Navitem path="/work" label="work" />
                        <Navitem path="/shop" label="shop" />
                        <Navitem path="/space" label="space" />
                        <Navitem path="/contact" label="contact me" />
                    </ul>
                </div>
            </nav>
        )
    }
};

export default Navigation;