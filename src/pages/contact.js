import React, {Component} from 'react';
import SocialItem from './../components/socialitem.js';

class Contact extends Component {
    render() {
        return (
            <section className="Contact">
                <div>
                    <p>
                        Hey! I'd love to hear from you. Send me a message using the contact form or connect with me via my socials.
                    </p>
                    <ul>
                        <SocialItem path="https://facebook.com/ebuka.nwaju/" iconName={['fab','facebook-f']} /> {/* facebook */}
                        <SocialItem path="https://twitter.com/savage_anatii" iconName={['fab','twitter']} /> {/* twitter */}
                        <SocialItem path="https://instagram.com/rin.ze/" iconName={['fab','instagram']} /> {/* instagram */}
                        <SocialItem path="https://github.com/theebuka" iconName={['fab','github-alt']} /> {/* github */}
                        <SocialItem path="https://dribbble.com/Ebukaa" iconName={['fab','dribbble']} /> {/* dribbble */}
                        <SocialItem path="https://medium.com/@ebuka.nwaju" iconName={['fab','medium-m']} /> {/* medium */}
                        <SocialItem path="https://unsplash.com/@anatii" iconName={['fab','unsplash']} /> {/* unsplash */}
                        <SocialItem path="mailto:ebuka.nwaju@yahoo.com" iconName={['fas','envelope']} /> {/* email */}
                        <SocialItem path="https://linkedin.com/" iconName={['fab','linkedin-in']} /> {/* linkedin */}
                    </ul>
                </div>
                <div>
                    <form action="https://www.formingo.co/submit/ebuka.nwaju@yahoo.com" method="POST">
                        <label for="name">Name</label>
                        <input type="text" name="name" placeholder="Lexie Webwoman" required></input>

                        <label for="location">Location</label>
                        <input type="text" name="location" placeholder="Alien Colony 1, Mars" required></input>

                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="notanalien@alienmail.com" required></input>

                        <label for="subject">Subject</label>
                        <select type="text" name="subject" placeholder="Choose a subject" required>
                            <option value="default" selected>Choose a subject</option>
                            <option value="Development-gig">Contract offer</option>
                            <option value="Consultancy">Consultancy</option>
                            <option value="Connect-with-me">Just looking to make a new friend</option>
                            <option value="Something-interesting-to-say">Something interesting to say</option>
                            <option value="Report-a-bug">Report a bug</option>
                        </select>

                        <label for="desscription">Message</label>
                        <textarea maxLength="400" name="Message" placeholder="Hello 'Not An Alien' person (weirdo), what do you want to say?" required></textarea>

                        <button type="submit">Shoot</button>
                    </form>
                </div>
            </section>
        )
    }
};

export default Contact;