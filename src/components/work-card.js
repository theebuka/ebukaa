import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import LocomotiveScroll from 'locomotive-scroll';

class WorkCard extends Component {
    /* componentDidMount() {
        // eslint-disable-next-line
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".work-list-item"),
            smooth: true
        })
    } */
    
    render() {
        return (
          <li className='work-list-item'>
            <Link to={this.props.link} className="label">{this.props.title}</Link>
            <span className='label-no'>{this.props.number}</span>
          </li>
        )
    }
}

export default WorkCard;