import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';

class WorkCard extends Component {
    componentDidMount() {
        // eslint-disable-next-line
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".work-list-item"),
            smooth: true
        })
    }
    
    render() {
        return (
              <li className='work-list-item' data-scroll>
                <span className='label-no'>{this.props.number}</span>
                <Link to={this.props.link} className="label">{this.props.title}</Link>
              </li>
        )
    }
}

export default WorkCard;