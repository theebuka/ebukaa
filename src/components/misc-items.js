import React, { Component } from 'react';

class MiscItem extends Component {
    render() {
        return (
            <div className="misc-section-item" data-scroll-container>
                <div data-scroll data-scroll-speed="5">
                    <h1>
                        <a href={this.props.link} rel="noopener noreferrer">{this.props.title}</a>
                    </h1>
                </div>
                <div data-scroll data-scroll-speed="-5">
                    <span>{this.props.label},</span> <span>{this.props.genre},</span> <span>{this.props.year}</span>
                </div>
            </div>
        )
    }
}

export default MiscItem;