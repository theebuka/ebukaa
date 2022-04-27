import React, {Component} from 'react';

class CTA extends Component {
    render() {
        return (
            <button className={this.props.className} type={this.props.type} label={this.props.label}>{this.props.text} {this.props.children}</button>
        )
    }
}

export default CTA;