import React, {Component} from 'react';

class Intro extends Component {
    render() {
        return(
            <div>
                <h6>{this.props.heading}</h6>
                <p title={this.props.body}>{this.props.body}</p>
            </div>
        )
    }
};

export default Intro;