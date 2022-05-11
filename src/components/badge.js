import React, { Component } from 'react';

class Badge extends Component {
    render() {
        return (
            <svg className="round-text" viewBox="0 0 186 186" width="100%" height="100%">
                <defs>
                    <path id="circular-text" d="M 100 100 m -74 0 a 74, 74 0, 1, 1 148, 0 a 74, 74 0, 1, 1 -148, 0"/>
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