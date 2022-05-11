import React, { Component } from 'react';
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from "./../split.min.js";

class Footer extends Component {
    componentDidMount() {
        // eslint-disable-next-line
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".Footer"),
            smooth: true
        });

        gsap.registerPlugin(ScrollTrigger);
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

    render() {

        return (
            <footer className="Footer">
                <div className='contact-email'>
                    <span className='animate-body'>Need to send a mail?</span>
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
                    </ul>
                </div>
                <div className="attribution">
                    <span className='animate-body'>
                        &copy; {new Date().getFullYear()} Chukwuebuka Nwaju
                    </span>
                    <span className='animate-body'>All rights reserved</span>
                </div>
            </footer>
        )
    }
}

export default Footer;