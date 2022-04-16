import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import LocomotiveScroll from 'locomotive-scroll';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Miscellaneous extends Component {
    /* componentDidMount() {
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".misc-item"),
            smooth: true
        })
    } */
    render() {
        return (
            <div className="misc-item" data-scroll-section>
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

export default Miscellaneous;