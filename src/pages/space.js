import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LocomotiveScroll from 'locomotive-scroll';
import SpaceMenuItem from '../components/space-menu-item.js';

class Space extends Component {
    componentDidMount() {
        // eslint-disable-next-line
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".Space"),
            smooth: true
        })
    }
    render() {
        let tabs = [
            {
                heading: "Lists.",
                path: "space/lists",
                body: "Explore my best songs curated by genre or time period. Whatever works."
            },
            {
                heading: "Thoughts.",
                path: "space/thoughts",
                body: "Just random musings by yours truly."
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
                heading: "My Wishlist.",
                path: "space/wishlist",
                body: "This is a list of stuff i want. Feel free to clear one or more (*wink*)."
            }
        ]

        return(
            <section className="Space" data-scroll-section>
                <div>
                    <p className="paragraph" data-scroll>
                        Welcome to my Space, where i curate some of my favorite stuff. JSYK, I have excellent taste <span className="">*chef's kiss*</span>, so don't fret. Feel free to look around.
                    </p>
                </div>
                <div data-scroll-container>
                    {tabs.map(function(tab) {
                        return <SpaceMenuItem key={tabs} link={tab.path} title={tab.heading} summary={tab.body} />
                    })}
                </div>
                <Link to="/contact" className="tertiary in-page-nav">Contact Me <FontAwesomeIcon icon={['fas', 'arrow-right']} /></Link>
            </section>
        )
    }
};

export default Space;