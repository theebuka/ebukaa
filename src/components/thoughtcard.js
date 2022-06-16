import React, {Component} from 'react';

class ThoughtCard extends Component {
    render() {
        return (
            <div className='thoughtcard'>
                <div>
                    <span className='datetime'>{this.props.datetime}</span>
                    <h1 className='title'>{this.props.title}</h1>
                </div>
                <div>
                    <p className='thought'>{this.props.thought}</p>
                </div>
            </div>
        )
    }
};

export default ThoughtCard;