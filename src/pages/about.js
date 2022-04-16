import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LocomotiveScroll from 'locomotive-scroll';
import CTA from "../components/cta.js";
import ProfileImg from './../images/img-15.jpg';

class About extends Component {
    componentDidMount() {
        // eslint-disable-next-line
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".About"),
            smooth: true
        });
    }
    render() {
        return (
            <section className="About" data-scroll-section>
                <p className="paragraph" data-scroll data-scroll-speed="1" data-section="1">
                    <span className="bright">Ebuka</span>. <span className="bright">Frontend developer, product designer &amp; writer</span> based in Lagos.
                </p>
                <div className="photo-wrapper" data-section="3">
                    <div className="photo-container" data-scroll data-scroll-speed="1" >
                        <div className="photo-box">
                             <figure>
                                <img src={ProfileImg} className="profile-image" alt="ebuka nwaju"></img>
                            </figure>
                        </div>
                    </div>
                </div>
                <p className="paragraph" data-scroll data-scroll-speed="1" data-section="2">
                    I specialize in helping <span className="bright">brands and startups</span> develop <span className="bright">fast accessible websites</span>, designing <span className="bright">highly usable and visually appealing interfaces</span> and writing <span className="bright">immmersive copy</span> for their projects to improve their online presence and brand recognition.
                </p>
                <p className="paragraph" data-scroll data-scroll-speed="1" data-section="4">
                    <span className="bright">6+ years of experience</span> building viable responsive frontend web solutions.
                    {/* with a myriad of frontend technologies such as HTML, CSS, Javascript, Jquery, React, Bootstrap etc. */}
                </p>
                <p className="paragraph" data-scroll data-section="5">
                    <span className="bright">4+ years of experience</span> in UI/UX, Graphic, Logo and branding with over 30 projects.
                    {/* designing complex (or simple) iterations in various facets of the design industry such as UI/UX, graphic and logo using software such as Adobe XD, Figma, Invision Studio, Framer, Adobe Photoshop and Adobe Illustrator. */}
                </p>
                <p className="paragraph" data-scroll data-section="6">
                    <span className="bright">2+ years of experience</span> creating creative, technical and academic pieces.
                    {/* Over the past year, i have also transitioned into writing <span className="bright">creative, technical and academic</span> papers or articles. */}
                </p>
                <div className="photo-wrapper" data-section="3">
                    <div className="photo-container" data-scroll data-scroll-speed="1" >
                        <div className="photo-box">
                             <figure>
                                <img src={ProfileImg} className="profile-image" alt="ebuka nwaju"></img>
                            </figure>
                        </div>
                    </div>
                </div>
                <p className="paragraph" data-scroll data-section="7">
                    I have had the priviledge of interning at some of the best programs in the world such as the <span className="bright">HNG 6.0 internship, Andela SDG Cohort 2</span>, to name a few. However, i am currently freelancing and looking to start my own startup.
                </p>
                <p className="paragraph" data-scroll data-section="8">
                    I'm open for <span className="bright">full-time, parttime or freelancing</span> roles as a web developer, designer or writer.
                </p>
                <CTA className="primary" type="button" label="Download Resume" text="Download Resume" />
                <Link to="/projects" className="tertiary">To next page <FontAwesomeIcon icon={['fas', 'arrow-right']} /></Link>
            </section>
        )
    }
};

export default About;