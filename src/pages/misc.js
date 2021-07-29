import React, {Component} from 'react';
/* import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; */
import MiscTab from './../components/misc-tabs.js';

class Misc extends Component {
    render() {
        let tabs = [
            {
                heading: "Playlist",
                path: "misc/playlist",
                body: "Explore my best songs curated by genre or time period. Whatever works."
            },
            {
                heading: "Watchlist",
                path: "misc/watchlist",
                body: "Great series i'm currently following or deserve a honourable mention."
            },
            {
                heading: "Readlist",
                path: "misc/readlist",
                body: "Reader, huh? See if you like anything in here then."
            },
            {
                heading: "Tools",
                path: "misc/tools",
                body: "Supercharge your workflow with amazing tools i use in my craft."
            },
            {
                heading: "Learning Resources",
                path: "misc/learning-resources",
                body: "If you like knowledge like me, take a dive."
            },
            {
                heading: "Maestros",
                path: "misc/creatives",
                body: "This is a thread of creatives and creators i like."
            },
            {
                heading: "Vendors",
                path: "misc/vendors",
                body: "Need a plug for stuff? Check these guys out."
            },
            {
                heading: "Thoughts",
                path: "misc/thoughts",
                body: "Just random musings by yours truly."
            },
            {
                heading: "My Wishlist",
                path: "misc/my-wishlist",
                body: "This is a list of stuff i want. Feel free to clear one or more (*wink*)."
            }
        ]

        return(
            <section className="Misc">
                <div>
                    <p className="paragraph">
                        This is a curated section of my <span className="bright">favorite stuff</span>. JSYK, I have <span className="bright">excellent taste</span> *chef's kiss*, so <span className="bright">don't fret</span>.
                    </p>
                </div>
                <div>
                    {tabs.map(function(tab) {
                        return <MiscTab key={tabs} path={tab.path} heading={tab.heading} body={tab.body} />
                    })}
                </div>
                {/* <Link to="/projects" className="tertiary">To next page <FontAwesomeIcon icon={['fas', 'arrow-right']} /></Link> */}
            </section>
        )
    }
};

export default Misc;