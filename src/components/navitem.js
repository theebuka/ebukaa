import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

class Navitem extends Component {
    render() {
        return (
            <li className="">
                <NavLink to={this.props.path}>{this.props.label}</NavLink>
            </li>
        )
    }
};

export default Navitem;