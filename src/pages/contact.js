import React, {Component} from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CTA from "../components/cta.js";
import { SocialItemBlock } from './../components/socialitem.js';

class Contact extends Component {
    componentDidMount() {
        // eslint-disable-next-line
        const scroll = new LocomotiveScroll({
          el: document.querySelector(".Contact"),
          smooth: true,
          offset: ["7%", 0]
        });
    }

    render() {
        return (
            <section className="Contact" data-scroll-container>
                <div>
                    <p className="paragraph" data-scroll>
                        Hey! I'd love to hear from you. Send me a message using the form or connect with me via my socials.
                    </p>
                </div>
                <div>
                    <form action="https://www.formingo.co/submit/ebuka.nwaju@yahoo.com" method="POST" data-scroll-secton>
                        <label for="name" data-scroll>Name</label>
                        <input type="text" name="name" placeholder="Gazorp gazorp" data-scroll data-scroll-delay="4" required></input>

                        <label for="location" data-scroll>Location</label>
                        <input type="text" name="location" placeholder="Alien Colony 1, Mars" data-scroll data-scroll-delay="4" required></input>

                        <label for="email" data-scroll>Email</label>
                        <input type="email" name="email" placeholder="notanalien@alienmail.com" data-scroll data-scroll-delay="4" required></input>

                        <label for="subject" data-scroll>Subject</label>
                        <select type="text" name="subject" placeholder="Choose a subject" data-scroll data-scroll-delay="4" required>
                            <option value="default" selected>Choose a subject</option>
                            <option value="Proposal">Proposal</option>
                            <option value="Consultancy">Consultancy</option>
                            <option value="Connect-with-me">Just looking to make a new friend</option>
                            <option value="Something-interesting-to-say">Something interesting to say</option>
                            <option value="Report-a-bug">Report a bug</option>
                        </select>

                        <label for="desscription" data-scroll>Message</label>
                        <textarea maxLength="400" name="Message" placeholder="Hello 'Not An Alien' person (weirdo), what do you want to say?" data-scroll data-scroll-delay="6" required></textarea>

                        <CTA className="send-message-button tertiary" type="submit" label="Shoot" text="Shoot" data-scroll data-scroll-delay="6"><FontAwesomeIcon icon={['fas', 'arrow-right']} /> </CTA>
                    </form>
                    <div className='socials' data-scroll-section>
                        <SocialItemBlock path="https://facebook.com/ebuka.nwaju/" iconName={['fab','facebook-f']}  data-scroll data-scroll-delay="2" /> {/* facebook */}
                        <SocialItemBlock path="https://twitter.com/savage_anatii" iconName={['fab','twitter']} data-scroll data-scroll-delay="4" /> {/* twitter */}
                        <SocialItemBlock path="https://instagram.com/rin.ze/" iconName={['fab','instagram']} data-scroll data-scroll-delay="6" /> {/* instagram */}
                        <SocialItemBlock path="https://unsplash.com/@anatii" iconName={['fab','unsplash']} data-scroll data-scroll-delay="8" /> {/* unsplash */}
                    </div>
                </div>
            </section>
        )
    }
};

export default Contact;