import React, {Component} from 'react';
import SocialItem from './socialitem.js';

class Social extends Component {
    render() {
        return (
            <div className="social-list">
                <ul>
                    <SocialItem path="https://facebook.com/ebuka.nwaju" iconName={['fab', 'facebook-f']} />
                    <SocialItem path="https://twitter.com/ebxkaa" iconName={['fab', 'twitter']} />
                    <SocialItem path="https://instagram.com/rin.ze" iconName={['fab', 'instagram']} />
                </ul>
            </div>
        )
    }
};

export default Social;