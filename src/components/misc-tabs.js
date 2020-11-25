import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MiscTab extends Component {
    render() {
        return(
            <div className="tab">
                <Link to={this.props.path}>
                    <h3>{this.props.heading}</h3>
                    <p>{this.props.body}</p>
                </Link> 
            </div>
        )
    }
};

export default MiscTab;