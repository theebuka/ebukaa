import React, { useState } from 'react';
import Logo from './logo.js';
import Navitem from './navitem.js';
import {X} from 'react-feather'
import Menu from './../images/hamburgermenu.svg';

const Topbar = () =>  {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    };
    const closeMenu = () => {
        setNavbarOpen(false)
    };
    return (
        <div className="topbar-wrapper">
            <div className="topbar">
                <Logo />
                <nav className="mobile-nav">
                    <button onClick={handleToggle}>{navbarOpen ? (<X className="menu-icon"/>) : (<img src={Menu} alt="double line hamburger menu" className="menu-icon" />)}</button>
                </nav>
            </div>
            <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <ul>
                    <Navitem path="/" label="Home" func={closeMenu} />
                    <Navitem path="/projects" label="Projects" func={closeMenu} />
                    <Navitem path="/shop" label="Shop" func={closeMenu} />
                    <Navitem path="/space" label="Space" func={closeMenu} />
                    <Navitem path="/contact" label="Contact Me" func={closeMenu} />
                </ul>
            </div>
        </div>
    )
};

export default Topbar;