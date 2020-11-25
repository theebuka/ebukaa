import React, {Component} from 'react';

class Skillcard extends Component {
    render() {
        return(
            <div>
                <h2>{this.props.title}<span>.</span></h2>
                <p>{this.props.body}</p>
                <p>{this.props.tools}</p>
            </div>
        )
    }
};

export default Skillcard;