import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navitem extends Component {
    render() {
        return (
            <li className="">
                <NavLink to={this.props.path} onClick={this.props.func} exact>{this.props.label}</NavLink>
            </li>
        )
    }
};

export default Navitem;