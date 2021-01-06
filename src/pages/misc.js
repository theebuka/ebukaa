import React, {Component} from 'react';
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
                body: "This is a board of creatives and creators i like."
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
                    <span>This is a curated section of my favorite stuff.</span>
                    <span>JSYK, I have excellent taste *chef's kiss*, so don't fret. </span>
                </div>
                <div>
                    {tabs.map(function(tab) {
                        return <MiscTab key={tab.id} path={tab.path} heading={tab.heading} body={tab.body} />
                    })}
                </div>
            </section>
        )
    }
};

export default Misc;