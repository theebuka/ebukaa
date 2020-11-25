import React, {Component} from 'react';
import SocialItem from './socialitem.js';

class Social extends Component {
    render() {
        return (
            <div className="social-list">
                <ul>
                    <SocialItem path="https://facebook.com/ebuka.nwaju" iconName={['fab', 'facebook-f']} />
                    <SocialItem path="https://twitter.com/savage_anatii" iconName={['fab', 'twitter']} />
                    <SocialItem path="https://instagram.com/ebuka.nwaju" iconName={['fab', 'instagram']} />
                </ul>
            </div>
        )
    }
};

export default Social;