import React, {Component} from 'react';
import LocomotiveScroll from 'locomotive-scroll';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CTA from "../components/cta.js";
import { SocialItemBlock } from './../components/socialitem.js';
// import SmilingPhoto from './../images/img-4.png';

class Contact extends Component {
    componentDidMount() {
        // eslint-disable-next-line
        const scroll = new LocomotiveScroll({
          el: document.querySelector(".Contact"),
          smooth: true
        });
    }

    render() {
        return (
            <section className="Contact">
                <div>
                    <p className="paragraph" data-scroll>
                        Hey! I'd love to hear from you. Send me a message using the form or connect with me via my socials.
                    </p>
                </div>
                <div>
                    <form action="https://www.formingo.co/submit/ebuka.nwaju@yahoo.com" method="POST" data-scroll>
                        <label for="name">Name</label>
                        <input type="text" name="name" placeholder="Gazorp gazorp" required></input>

                        <label for="location">Location</label>
                        <input type="text" name="location" placeholder="Alien Colony 1, Mars" required></input>

                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="notanalien@alienmail.com" required></input>

                        <label for="subject">Subject</label>
                        <select type="text" name="subject" placeholder="Choose a subject" required>
                            <option value="default" selected>Choose a subject</option>
                            <option value="Proposal">Proposal</option>
                            <option value="Consultancy">Consultancy</option>
                            <option value="Connect-with-me">Just looking to make a new friend</option>
                            <option value="Something-interesting-to-say">Something interesting to say</option>
                            <option value="Report-a-bug">Report a bug</option>
                        </select>

                        <label for="desscription">Message</label>
                        <textarea maxLength="400" name="Message" placeholder="Hello 'Not An Alien' person (weirdo), what do you want to say?" required></textarea>

                        <CTA className="primary" type="submit" label="Shoot" text="Shoot" />
                    </form>
                    <div className='socials' data-scroll>
                        <SocialItemBlock path="https://facebook.com/ebuka.nwaju/" iconName={['fab','facebook-f']} /> {/* facebook */}
                        <SocialItemBlock path="https://twitter.com/savage_anatii" iconName={['fab','twitter']} /> {/* twitter */}
                        <SocialItemBlock path="https://instagram.com/rin.ze/" iconName={['fab','instagram']} /> {/* instagram */}
                        <SocialItemBlock path="https://github.com/theebuka" iconName={['fab','github-alt']} /> {/* github */}
                        <SocialItemBlock path="https://dribbble.com/Ebukaa" iconName={['fab','dribbble']} /> {/* dribbble */}
                        <SocialItemBlock path="https://medium.com/@ebuka.nwaju" iconName={['fab','medium-m']} /> {/* medium */}
                        <SocialItemBlock path="https://unsplash.com/@anatii" iconName={['fab','unsplash']} /> {/* unsplash */}
                        <SocialItemBlock path="https://linkedin.com/" iconName={['fab','linkedin-in']} /> {/* linkedin */}
                    </div>
                    <div className='contact-email'>
                        <span data-scroll>Need to send a mail?</span>
                        <h3 data-scroll><a href="mailto:me@theebuka.com">me@theebuka.com</a></h3>
                    </div>
                </div>
            </section>
        )
    }
};

export default Contact;