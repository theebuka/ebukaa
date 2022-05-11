import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SpaceMenuItem extends Component {
    render() {
        return (
            <div className="space-item" data-scroll-section>
                <div data-scroll data-scroll-speed="5">
                    <h1><Link to={this.props.link}>{this.props.title}</Link></h1>
                </div>
                <div data-scroll data-scroll-speed="-5">
                    <p>
                        {this.props.summary}
                    </p>
                </div>
            </div>
        )
    }
}

export default SpaceMenuItem;