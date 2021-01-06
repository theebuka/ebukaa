import React, {Component} from 'react';
import SocialItem from './../components/socialitem.js';

class DevCard extends Component {
    render() {
        return (
            <div className="dev-card">
                <div>
                    <div>
                        <h4>{this.props.title}</h4>
                        <span>{this.props.stack}</span>
                    </div>
                    <ul>
                        <SocialItem path={this.props.linkSite} iconName={['far','globe']} />
                        <SocialItem path={this.props.linkGithub} iconName={['fab','github']} />
                    </ul>
                </div>
                <div>
                    <p>{this.props.synopsis}</p>
                </div>
            </div>
        )
    }
};

export default DevCard;