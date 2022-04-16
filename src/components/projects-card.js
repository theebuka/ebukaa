import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import SocialItem from './socialitem';
import LocomotiveScroll from 'locomotive-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Project extends Component {
    componentDidMount() {
        // eslint-disable-next-line
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".project-item"),
            smooth: true
        })
    }
    render() {
        return (
            <div className="project-item" data-scroll-section>
                <div>
                    <h1><Link to={this.props.link}>{this.props.title}</Link></h1>
                </div>
                <div className="project-item-body" data-scroll>
                    <div>
                        <p>
                            {this.props.summary}
                        </p>
                    </div>
                    <div>
                        <span>{this.props.stack}</span>
                        <a href={this.props.path} rel="noopener noreferrer">
                            Case Study <FontAwesomeIcon icon={this.props.iconName} className="social-icon"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;