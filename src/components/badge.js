import React, { Component } from 'react';

class Badge extends Component {
    render() {
        return (
            <svg class="round-text" viewbox="0 0 210 210" width="210" height="210">
                <defs>
                    <path id="circular-text" d="M 105 105 m -74 0 a 74, 74 0, 1, 1 148, 0 a 74, 74 0, 1, 1 -148, 0"/>
                </defs>
                <text>
                    <textPath href="#circular-text">
                        You might as well just scroll down a bit more sikes.
                    </textPath>
                </text>
            </svg>
        )
    }
}

export default Badge;