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
                    <button onClick={handleToggle}>
                        {navbarOpen ? (<X className="menu-icon"/>) : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" class="menu-icon" width="24" height="24"><rect y="24" width="100" height="4"></rect><rect y="54" width="100" height="4"></rect></svg>)}
                    </button>
                </nav>
            </div>
            <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <ul>
                    <Navitem path="/" label="Home" func={closeMenu} />
                    <Navitem path="/work" label="Work" func={closeMenu} />
                    <Navitem path="/shop" label="Shop" func={closeMenu} />
                    <Navitem path="/space" label="Space" func={closeMenu} />
                    <Navitem path="/contact" label="Contact Me" func={closeMenu} />
                </ul>
            </div>
        </div>
    )
};

export default Topbar;