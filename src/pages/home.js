import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gsap from "gsap";
import SplitText from "./../split.min.js";
import ScrollTrigger from 'gsap/ScrollTrigger';
import ProfilePhoto from './../images/bicycle-man.jpg';
import Badge from './../components/badge.js';


const Home = () => {
  
  gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(SplitText);

  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true
      });
    });

    // `useEffect`'s cleanup phase
    return () => scroll.destroy();
  });

  const anim = () => {
    const split = new SplitText(".animate", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText(".animate", {
      type: "words, lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 2.5,
      y: 0,
      opacity: 1,
      stagger: 0.3,
      delay: 0.1,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    var rotate = gsap.timeline({
      scrollTrigger: {
        trigger: ".home-about",
        scrub: true,
        start: 'top center',
        end: 'bottom 1px',
      }
    }).to('#circular-text', {
      rotation: 320,
      transformOrigin: 'center center',
      duration: 10, ease: 'expo',
    })
  });

  const targets = gsap.utils.toArray(".animate-body");
  console.log(gsap.utils.toArray("animate-body"));
  useEffect(() => {
    
    targets.forEach((target) => {
      var SplitClient = new SplitText(target, { type: "words, lines", linesClass: "lineChildren" });
      var SplitParentBody = new SplitText(target, { type: "words, lines", linesClass: "lineParent" });
      // let liness = SplitClient.lines; //an array of all the divs that wrap each character
      gsap.to(SplitClient.lines, {
        duration: 2,
        y: 0,
        opacity: 1,
        stagger: 0.3,
        delay: 0.1,
        ease: "expo",
        scrollTrigger: {
          trigger: target,
          start: "top 60%",
          end: "bottom center",
        }
      });
    });
  }, [targets]);

  return (
    <section onLoad={anim} className="Home">
      <div className="name-and-title home-section">
        <h1 id='name' className="name animate">
          Chukwuebuka Nwaju &mdash; frontend developer, product designer &amp; writer based in Lagos.
        </h1>
        <div className='dictionary'>
          <div>
            <h4 className='animate'>Chukwuebuka</h4>
            <h4 className='animate'>/Choo-koo-a-boo-car/</h4>
          </div>
          <div>
            <h4 className='animate'>1. Noun</h4>
            <p className='animate'>God is great (Igbo)</p>
          </div>
          <div>
            <h4 className='animate'>2. Verb</h4>
            <p className='animate'>
              To outperform beyond expectations.
              <span>"The deadline is tomorrow. We're gonna need you to Chukwuebuka"</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="scroll-effect" data-scroll data-scroll-direction="hrizontal" data-scroll-speed="-8" data-scroll-target="#direction"> Keep scrolling, almost there</h3>
        <h3 className="scroll-effect" data-scroll data-scroll-direction="hrizontal" data-scroll-speed="-8" data-scroll-target="#direction"> Yep, you guessed it</h3>
        <h3 className="scroll-effect" data-scroll data-scroll-direction="hrizontal" data-scroll-speed="-8" data-scroll-target="#direction"> These are just fillers lol</h3>
      </div>
      <div className='home-about home-section'>
        <div className='image-container'>
          <div className="image-wrapper" data-scroll>
            <img src={ProfilePhoto} className="home-profile-image" alt="black and white birds-eye view of man riding a bicycle across an empty intersection" data-scroll />
          </div>
          <div>
            <Badge />
          </div>
        </div>
        <div className='about-text'>
          <p className='animate-body'>
            Hello.
          </p>
          <p className='animate-body'>
            I'm Chukwuebuka Nwaju, a frontend web developer, product designer and copywriter based in Lagos, Nigeria.
          </p>
          <p className='animate-body'>
            I help brands and startups develop fast, accessible &amp; responsive websites, design aesthetic usable interfaces and write compelling copy to improve their online presence and brand recognition.
          </p>
          <p className='animate-body'>
            I am passionate about creating products and solutions to help shape the future of tech and the global industrial ecosystem.
          </p>
        </div>
      </div>
      <div className="skillset home-section">
        <h2 className='animate-body'>expertise</h2>
        <ul>
          <li>
            <span className='label-no animate-body'>01</span>
            <span className='label animate-body'>art direction</span>
          </li>
          <li>
            <span className='label-no animate-body'>02</span>
            <span className='label animate-body'>user interface design</span>
          </li>
          <li>
            <span className='label-no animate-body'>03</span>
            <span className='label animate-body'>user experience design</span>
  
            {console.log(gsap.utils.toArray("animate-body")) }
          </li>
        </ul>
      </div>
      <div className="home-nav home-section">
        <Link to="/" className="primary animate-body">Download Resume</Link>
        <Link to="/projects" className="tertiary animate-body">Projects <FontAwesomeIcon icon={['fas', 'arrow-right']} /></Link>
      </div>
    </section>
  )
};

export default Home;