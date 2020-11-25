import React, {Component} from 'react';
import SocialItem from './../components/socialitem.js';

class DevCard extends Component {
    render() {
        return (
            <div className="dev-card">
                <div>
                    <h5>{this.props.title}</h5>
                    <p>{this.props.synopsis}</p>
                </div>
                <div>
                    <span>{this.props.stack}</span>
                </div>
                <div>
                    <SocialItem path={this.props.linkSite} icon="browser" />
                    <SocialItem path={this.props.linkGithub} icon={['fab','github']} />
                </div>
            </div>
        )
    }
};

export default DevCard;