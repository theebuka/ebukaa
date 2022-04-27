import React, { Component } from 'react';
import LocomotiveScroll from "locomotive-scroll";

class Footer extends Component {
    componentDidMount() {
        // eslint-disable-next-line
        const scroll = new LocomotiveScroll({
          el: document.querySelector(".Footer"),
          smooth: true
        });
    }

    render() {
        return (
            <footer className="Footer" data-scroll-section>
                <div className='contact-email'>
                    <span data-scroll>Need to send a mail?</span>
                    <h3 data-scroll data-scroll-delay="4"><a href="mailto:me@theebuka.com">me@theebuka.com</a></h3>
                </div>
                <div className="portfolio">
                    <ul>
                        <li className="footer-portfolio" data-scroll>
                            <a href="https://github.com/theebuka">Github</a>
                        </li>
                        <li className="footer-portfolio" data-scroll>
                            <a href="https://dribbble.com/Ebukaa">Dribbble</a>
                        </li>
                        <li className="footer-portfolio" data-scroll>
                            <a href="https://medium.com/@ebuka.nwaju">Medium</a>
                        </li>
                        <li className="footer-portfolio" data-scroll>
                            <a href="https://linkedin.com/">LinkedIn</a>
                        </li>
                    </ul>
                </div>
                <div className="attribution">
                    <span data-scroll>
                        &copy; {new Date().getFullYear()} Chukwuebuka Nwaju
                    </span>
                    <span data-scroll>All rights reserved</span>
                </div>
            </footer>
        )
    }
}

export default Footer;