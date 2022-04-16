import React, { useState } from "react";
import Navitem from './navitem.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobileNavigation = () => {
    // render() {
        const [navbarOpen, setNavbarOpen] = useState(false);
        const handleToggle = () => {
            setNavbarOpen(prev => !prev)
        };
        const closeMenu = () => {
            setNavbarOpen(false)
        };
        return (
            <nav className="mobile-nav">
                <button onClick={handleToggle}>{navbarOpen ? (<FontAwesomeIcon icon={['fas','times']} className="menu-icon"/>) : (<FontAwesomeIcon icon={['fas','bars']} className="menu-icon"/>)}</button>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <Navitem path="/" label="Home" func={closeMenu} />
                    {/* <Navitem path="/about" label="About"  func={closeMenu} /> */}
                    <Navitem path="/projects" label="Projects" func={closeMenu} />
                    <Navitem path="/shop" label="Shop" func={closeMenu} />
                    <Navitem path="/space" label="Space" func={closeMenu} />
                    <Navitem path="/contact" label="Contact Me" func={closeMenu} />
                </ul>
            </nav>
        )
    // }
}

export default MobileNavigation;