import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gsap from "gsap";
import SplitText from "./../split.min.js";
import ScrollTrigger from 'gsap/ScrollTrigger';
import ProfilePhoto from './../images/bicycle-man.jpg';
import Badge from './../components/badge.js';
import { ArrowDown } from 'react-feather';


const Home = () => {
  
  gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(SplitText);

  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector(".home-about")
        // smooth: true,
        // smoothMobile: true,
        // resetNativeScroll: true
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
    gsap.timeline({
      scrollTrigger: {
        trigger: ".home-anchor",
        scrub: true,
        start: 'top bottom',
        end: 'bottom top',
      }
    }).to('#circular-text', {
      rotation: 160,
      transformOrigin: 'center center',
      duration: 20, ease: 'power.4',
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
    <section onLoad={anim} className="Home Page">
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


      <div className='home-anchor home-section'>
        <Badge />
        <ArrowDown />
      </div>


      <div className='home-about home-section'>
        <div className='image-container'>
          <div className="image-wrapper" data-scroll>
            <img src={ProfilePhoto} className="home-profile-image" alt="black and white birds-eye view of man riding a bicycle across an empty intersection" data-scroll />
          </div>
        </div>
        <div className='about-text'>
          <h2 className="home-section-header">about</h2>
          <p className='animate-body'>
            Hey there &mdash; I'm Chukwuebuka Nwaju, a frontend web developer, product designer and writer based in Lagos, Nigeria.
          </p>
          <p className='animate-body'>
            I help brands build fast, accessible &amp; responsive websites, design aesthetic usable interfaces and write compelling copy to improve their online presence and brand recognition.
          </p>
          <p className='animate-body'>
            I am passionate about creating products and solutions to help shape the future of tech and the global industrial ecosystem.
          </p>
        </div>
      </div>


      <div className="home-skillset home-section">
        <h2 className='animate-body home-section-header'>expertise</h2>
        <p>
          UI design &mdash; UX research &mdash; Art direction &mdash; UX design &mdash; ReactJS &mdash; Interaction design &mdash; Brand identity design
        </p>
      </div>


      <div className="home-awards home-section">
        <h2 className='home-section-header'>awards and recognitions</h2>
        <ul className='home-awards-list'>
          <li>
            <a href="#">Muzli</a><span>&mdash; #13</span>
          </li>
          <li>
            <a href="$">Awwwards SOTD</a><span>&mdash; coming soon</span>
          </li>
          <li>
            <a href="#">Awwwards SOTW</a><span>&mdash; coming soon</span>
          </li>
          <li>
            <a href="#">Awwwards SOTM</a><span>&mdash; coming soon</span>
          </li>
        </ul>
      </div>


      <div className="home-nav home-section">
        
        <Link to="/work" className="">
          <span>Browse</span>
          <span>Work <FontAwesomeIcon icon={['fas', 'arrow-right']} /></span>
        </Link>
      </div>
    </section>
  )
};

export default Home;