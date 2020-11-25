import React, {Component} from 'react';
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MiscTab from './../components/misc-tabs.js';
// import Playlist from './playlist.js';
// import Error from './error.js';

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
                body: "Dopest series i'm currently following. Or i've completed that deserve a honourable mention."
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
            }
        ]

        return(
            <section className="Misc">
                <div>
                    <span>This is a curated section of my favorite stuff.</span>
                    <span>JSYK, I have excellent taste *chef's kiss*, so don't fret. </span>
                    <span>Enter at your own discretion.</span>
                </div>
                <div>
                    {/* <MiscTab path="/misc/playlist" heading="Playlists" body="Explore my best songs curated by genre or time period. Whatever works." img="--background: url('./../images/.jpg')" />
                    <MiscTab path="/misc/series" heading="Series" body="Dopest series i'm currently following. Or i've completed but need a honourable mention." img="--background: url('./../images/.jpg')" />
                    <MiscTab path="/misc/anime" heading="Anime" body="Anime is gold, if you read my bio. See what titles i'm following." img="--background: url('./../images/.jpg')" />
                    <MiscTab path="/misc/tools" heading="Tools" body="Supercharge your workflow with amazing tools i use in my craft." img="--background: url('./../images/.jpg')" />
                    <MiscTab path="/misc/learning-resources" heading="Learning Resources" body="If you like knowledge like me, take a dive." img="--background: url('./../images/.jpg')" />
                    <MiscTab path="/misc/creatives" heading="Maestros" body="This is a board of creatives and creators i like." img="--background: url('./../images/.jpg')" />
                    <MiscTab path="/misc/vendors" heading="Vendors" body="Need a plug for stuff? Check these guys out." img="--background: url('./../images/.jpg')" /> */}
                    {tabs.map(function(tab) {
                        return <MiscTab key={tab.id} path={tab.path} heading={tab.heading} body={tab.body} />
                    })}
                </div>
            </section>
        )
    }
};

export default Misc;