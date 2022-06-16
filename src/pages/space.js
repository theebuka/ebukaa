import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import LocomotiveScroll from 'locomotive-scroll';
import SpaceMenuItem from '../components/space-menu-item.js';

class Space extends Component {
    /* componentDidMount() {
        // eslint-disable-next-line
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".Space"),
            smooth: true
        })
    } */
    render() {
        let tabs = [
            {
                heading: "Lists.",
                path: "space/lists",
                body: "Curated preferences"
            },
            {
                heading: "Thoughts.",
                path: "space/thoughts",
                body: "Random musings"
            },
            {
                heading: "Resources.",
                path: "space/resources",
                body: "Helpful stuff"
            },
            {
                heading: "People.",
                path: "space/people",
                body: "Plug thread"
            },
            {
                heading: "Wishlist.",
                path: "space/wishlist",
                body: "."
            }
        ]

        return(
            <section className="Space Page">
                <div>
                    <p className="paragraph">
                        Welcome to my Space, where i curate stuff. JSYK, I have excellent taste <span className="">*chef's kiss*</span>, so look around.
                    </p>
                </div>
                <div>
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