import React, { Component } from 'react';

class Badge extends Component {
    render() {
        return (
            <svg className="round-text" viewBox="0 0 186 186" width="100%" height="100%">
                <defs>
                    <path id="circular-text" d="M 93 93 m -75 0 a 75, 75 0, 1, 1 150, 0 a 75, 75 0, 1, 1 -150, 0"/>
                </defs>
                <text>
                    <textPath href="#circular-text">
                       frontend developer. product designer. creative writer. human.
                    </textPath>
                </text>
            </svg>
        )
    }
}

export default Badge;