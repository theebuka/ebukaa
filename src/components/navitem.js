import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {ArrowUpRight} from 'react-feather'

class Navitem extends Component {
    render() {
        return (
            <li className="navigation-item">
                <NavLink to={this.props.path} onClick={this.props.func} exact>{this.props.label} <ArrowUpRight size={16} /></NavLink>
            </li>
        )
    }
};

export default Navitem;