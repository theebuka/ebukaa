import React, {Component} from 'react';
import Logo from './logo.js';
// import Resume from './resume-dl.js';

class Topbar extends Component {
    render() {
        return (
            <div className="topbar-wrapper">
                <div className="topbar">
                    <Logo />
                    {/* <Resume /> */}
                </div>
            </div>
        )
    }
};

export default Topbar;