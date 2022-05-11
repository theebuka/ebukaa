import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';

class Project extends Component {
    componentDidMount() {
        // eslint-disable-next-line
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".project-list-item"),
            smooth: true
        })
    }
    
    render() {
        return (
              <li className='project-list-item' data-scroll>
                <span className='label-no'>{this.props.number}</span>
                <Link to={this.props.link} className="label">{this.props.title}</Link>
              </li>
        )
    }
}

export default Project;