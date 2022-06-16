import React, { Component } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CTA from "../components/cta.js";
import { SocialItemBlock } from './../components/socialitem.js';

class Contact extends Component {
    /* componentDidMount() {
        // eslint-disable-next-line
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".Contact"),
            smooth: true,
            offset: ["7%", 0]
        });
    } */

    render() {
        return (
            <section className="Contact Page">
                <div>
                    <p className="paragraph">
                        Hey! I'd love to hear from you. Send me a message using the form or connect with me via my socials.
                    </p>
                </div>
                <div>
                    <form action="https://www.formingo.co/submit/ebuka.nwaju@yahoo.com" method="POST">
                        <div>
                            <label htmlFor="name">Name
                                <input type="text" name="name" placeholder="Gazorp gazorp" required></input>
                            </label>
                            <label htmlFor="location">Location
                                <input type="text" name="location" placeholder="Alien Colony 1, Mars" required></input>
                            </label>
                            <label htmlFor="email">Email
                                <input type="email" name="email" placeholder="notanalien@alienmail.com" required></input>
                            </label>
                            <label htmlFor="subject">Subject
                                <select type="text" name="subject" placeholder="Choose a subject" defaultValue={"default"} required>
                                    <option value="default">Choose message subject</option>
                                    <option value="Proposal">Proposal</option>
                                    <option value="Consultancy">Consultancy</option>
                                    <option value="Connect-with-me">Just looking to make a new friend</option>
                                    <option value="Something-interesting-to-say">Something interesting to say</option>
                                    <option value="Report-a-bug">Report a bug</option>
                                </select>
                            </label>
                            <label htmlFor="description">Message
                                <textarea maxLength="400" name="Message" placeholder="Hello 'Not An Alien' person (weirdo), what do you want to say?" required></textarea>
                            </label>
                        </div>
                        <CTA className="send-message-button primary" type="submit" label="Shoot" text="Send Message"><FontAwesomeIcon icon={['fas', 'arrow-right']} /> </CTA>
                    </form>
                    <div className='socials'>
                        <h2>Socials</h2>
                        <div>
                            <SocialItemBlock path="https://facebook.com/ebuka.nwaju/" iconName={['fab', 'facebook-f']} /> {/* facebook */}
                            <SocialItemBlock path="https://twitter.com/savage_anatii" iconName={['fab', 'twitter']} /> {/* twitter */}
                            <SocialItemBlock path="https://instagram.com/rin.ze/" iconName={['fab', 'instagram']} /> {/* instagram */}
                            <SocialItemBlock path="https://unsplash.com/@anatii" iconName={['fab', 'unsplash']} /> {/* unsplash */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

export default Contact;