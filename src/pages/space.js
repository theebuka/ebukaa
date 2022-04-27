import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import MiscTab from './../components/misc-tabs.js';
import LocomotiveScroll from 'locomotive-scroll';
import Miscellaneous from '../components/miscellaneous-tab.js';

class Space extends Component {
    componentDidMount() {
        // eslint-disable-next-line
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".Misc"),
            smooth: true
        })
    }
    render() {
        let tabs = [
            {
                heading: "Playlist.",
                path: "space/playlist",
                body: "Explore my best songs curated by genre or time period. Whatever works."
            },
            {
                heading: "Watchlist.",
                path: "space/watchlist",
                body: "Great series i'm currently following or deserve a honourable mention."
            },
            {
                heading: "Readlist.",
                path: "space/readlist",
                body: "Reader, huh? See if you like anything in here then."
            },
            {
                heading: "Tools.",
                path: "space/tools",
                body: "Supercharge your workflow with amazing tools i use in my craft."
            },
            {
                heading: "Learning Resources.",
                path: "space/learning-resources",
                body: "If you like knowledge like me, take a dive."
            },
            {
                heading: "Maestros.",
                path: "space/creatives",
                body: "This is a thread of creatives and creators i like."
            },
            {
                heading: "Vendors.",
                path: "space/vendors",
                body: "Need a plug for stuff? Check these guys out."
            },
            {
                heading: "Thoughts.",
                path: "space/thoughts",
                body: "Just random musings by yours truly."
            },
            {
                heading: "My Wishlist.",
                path: "space/wishlist",
                body: "This is a list of stuff i want. Feel free to clear one or more (*wink*)."
            }
        ]

        return(
            <section className="Misc" data-scroll-section>
                <div>
                    <p className="paragraph" data-scroll>
                        Welcome to my Space, where i curate some of my favorite stuff. JSYK, I have excellent taste <span className="">*chef's kiss*</span>, so don't fret. Feel free to look around.
                    </p>
                </div>
                <div data-scroll-container>
                    {tabs.map(function(tab) {
                        return <Miscellaneous key={tabs} link={tab.path} title={tab.heading} summary={tab.body} />
                    })}
                </div>
                <Link to="/contact" className="tertiary">Contact Me <FontAwesomeIcon icon={['fas', 'arrow-right']} /></Link>
            </section>
        )
    }
};

export default Space;