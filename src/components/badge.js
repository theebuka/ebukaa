import React, { Component } from 'react';

class Badge extends Component {
    render() {
        return (
            <svg className="round-text" viewBox="0 0 183 183" width="100%" height="100%">
                <defs>
                    <path id="circular-text" d="M 100 100 m -74 0 a 74, 74 0, 1, 1 148, 0 a 74, 74 0, 1, 1 -148, 0"/>
                </defs>
                <text>
                    <textPath href="#circular-text">
                        Web Developer. Product Designer. Copywriter. Human.
                    </textPath>
                </text>
            </svg>
        )
    }
}

export default Badge;