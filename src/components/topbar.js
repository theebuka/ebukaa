import React, { useState } from 'react';
import Logo from './logo.js';
import Navitem from './navitem.js';
import {X} from 'react-feather'

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
                        {navbarOpen ? (<X className="menu-icon"/>) : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" className="menu-icon" width="24" height="24"><rect y="24" width="100" height="4"></rect><rect y="54" width="100" height="4"></rect></svg>)}
                    </button>
                </nav>
            </div>
            <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <ul>
                    <Navitem path="/" label="home" func={closeMenu} />
                    <Navitem path="/work" label="work" func={closeMenu} />
                    <Navitem path="/shop" label="shop" func={closeMenu} />
                    <Navitem path="/space" label="space" func={closeMenu} />
                    <Navitem path="/contact" label="contact me" func={closeMenu} />
                </ul>
            </div>
        </div>
    )
};

export default Topbar;