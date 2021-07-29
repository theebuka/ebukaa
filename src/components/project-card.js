import React, {Component} from 'react';
import SocialItem from './../components/socialitem.js';

class DevCard extends Component {
    render() {
        return (
            <div className="dev-card">
                <div>
                    <h4>{this.props.title}</h4>
                    <span>{this.props.stack}</span>
                </div>
                <div>
                    <p>{this.props.synopsis}</p>
                </div>
                <ul>
                    {/* <SocialItem path={this.props.linkSite} iconName={['far','globe']} /> */}
                    <SocialItem path={this.props.linkGithub} iconName={['fab','github']} />
                    <li className="project-page-list">
                        <a href={this.props.path} className="project-page-link" target="_blank" rel="noopener noreferrer">Go to page</a>
                    </li>
                </ul>
            </div>
        )
    }
};

export default DevCard;