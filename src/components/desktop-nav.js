import React, {Component} from 'react';
import Navitem from './navitem.js';

class Navigation extends Component {
    render() {
        return (
            <nav className="desktop-nav">
                <div>
                    <ul className="desktop-nav-list">
                        <Navitem path="/" label="Home" />
                        <Navitem path="/about" label="About" />
                        <Navitem path="/projects" label="Projects" />
                        <Navitem path="/contact" label="Contact" />
                        <Navitem path="/misc" label="Misc" />
                    </ul>
                </div>
            </nav>
        )
    }
};

export default Navigation;