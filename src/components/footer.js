import React, { Component } from 'react';
// import LocomotiveScroll from "locomotive-scroll";
/* import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from "./../split.min.js"; */

class Footer extends Component {
    componentDidMount() {
        /* setInterval(() => this.setState({
           time: new Date().toLocaleString('en-GB', {hour: 'numeric', minute: 'numeric', hour12: true})
        }), 1000); */
        

        // gsap.registerPlugin(ScrollTrigger);
        /* function() {
            const targets = gsap.utils.toArray(".animate-body");
            targets.forEach((target) => {
                let SplitClient = new SplitText(target, { type: "words,lines", linesClass: 'lineChildren', });
                let SplitParentBody = new SplitText(target, { type: "words,lines", linesClass: 'lineParent', });
                let linesss = SplitClient.lines; //an array of all the divs that wrap each character
                gsap.to(linesss, {
                    duration: 2,
                    y: 0,
                    opacity: 1,
                    stagger: 0.3,
                    delay: 0.1,
                    ease: "expo",
                    scrollTrigger: {
                        trigger: target,
                        start: "top 10%",
                        end: "bottom center",
                    }
                });
            });
        }; */
        /* const childSplit = new SplitText(".animate-body", {type: "lines"});

        gsap.set(childSplit.lines, {opacity: 0});

        ScrollTrigger.batch(childSplit.lines, {
        onEnter: batch => {
            gsap.set(batch, {opacity: 1, yPercent: 100});
            gsap.to(batch, {
            yPercent: 0,
            duration: 1.5,
            ease: "power4", 
            stagger: 0.3
            });
        },
        onLeaveBack: batch => gsap.to(batch, {opacity: 0, yPercent: 100}),
        start: "bottom 95%"
        }); */
    }
    /* componentWillUnmount() {
        clearInterval(this.interval);
    } */

    render() {
        return (
            <footer className="Footer">
                <div className='contact-email'>
                    <span className='animate-body'>Let's create amazing stuff</span>
                    <h1 className='animate-body'><a href="mailto:me@theebuka.com">me@theebuka.com</a></h1>
                </div>
                <div className="portfolio">
                    <ul>
                        <li className="footer-portfolio animate-body">
                            <a href="https://github.com/theebuka">github</a>
                        </li>
                        <li className="footer-portfolio animate-body">
                            <a href="https://dribbble.com/Ebukaa">dribbble</a>
                        </li>
                        <li className="footer-portfolio animate-body">
                            <a href="https://medium.com/@ebuka.nwaju">medium</a>
                        </li>
                        <li className="footer-portfolio animate-body">
                            <a href="https://linkedin.com/">linkedin</a>
                        </li>
                        <li className="footer-portfolio animate-body">
                            <a href="/">download resume</a>
                        </li>
                    </ul>
                </div>
                <div className="attribution">
                    <div className='year animate-body'>
                        <span>{new Date().getFullYear()}</span>
                    </div>
                    <div className='info'>
                        <div>
                            <span className='animate-body'>{ }</span>
                            <span className='animate-body'>Lagos</span>
                        </div>
                        <div>
                            <span className='animate-body'>Chukwuebuka Nwaju</span>
                            <span className='animate-body'>All rights reserved</span>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;