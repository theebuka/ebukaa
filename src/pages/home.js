import React, {Component, useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfilePhoto from './../images/bicycle-man.jpg';
import Badge from './../components/badge.js';

const Home = () => {
    
    /* componentDidMount = () => {
      // eslint-disable-next-line
      const scroll = new LocomotiveScroll({
        el: document.querySelector(".Home"),
        smooth: true
      });
    } */

    const [preloader, setPreloader] = useState(true);
    const [timer, setTimer] = useState(7);
    const id = useRef(null);
    const clear = () => {
      window.clearInterval(id.current);
      setPreloader(false);
    }
    useEffect(() => {
      id.current = window.setInterval(() => {
        setTimer((timer)=>timer-1)
      }, 1000)
    })
    useEffect(() => {
      if (timer === 0) {
        clear();
      }
    }, [timer]);

      return (
        <>
          {preloader ? (
            <section className="preloader-wrapper absolute" data-scroll-section>
              <div className="preloader-name">
                <div>
                  <h1>Ebuka</h1>
                  <h1>Nwaju</h1>
                </div>
              </div>
              <div className="preloader-line">
                <div className='line'></div>
              </div>
            </section>
          ) : (
            <section className="Home" data-scroll-section>
              <div className="name-and-title home-section">
                <h1 className="name">
                  <span className="" data-scroll data-scroll-delay="1" data-scroll-speed="4">Chukwueb<span className="alt">x</span>ka</span> 
                  <span className="" data-scroll data-scroll-delay="3"  data-scroll-speed="-4">Nwaju.</span>
                </h1>
                <h2 className="title" data-scroll data-scroll-delay="16" data-scroll-speed="-8">Developer &amp; Product designer</h2>
                <div className='dictionary'>
                  <div>
                    <h4 data-scroll data-scroll-delay="1" data-scroll-speed="4">Chukwuebuka</h4>
                    <h4 data-scroll data-scroll-delay="-4" data-scroll-speed="-4">/Choo-koo-a-boo-car/</h4>
                  </div>
                  <div>
                    <h4 data-scroll data-scroll-delay="1" data-scroll-speed="4">1. Noun</h4>
                    <p data-scroll data-scroll-delay="2" data-scroll-speed="-2">God is great (Igbo)</p>
                  </div>
                  <div>
                    <h4 data-scroll data-scroll-delay="1" data-scroll-speed="4">2. Verb</h4>
                    <p data-scroll data-scroll-delay="2" data-scroll-speed="-2">
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
                    <img src={ProfilePhoto} className="home-profile-image" alt="black and white birds-eye view of man riding a bicycle across an empty intersection" />
                  </div>
                  <div>
                    <Badge />
                  </div>
                </div>
                <p data-scroll>
                  Hello.
                </p>
                <p data-scroll>
                  I'm <span className="bright">Chukwuebuka Nwaju</span>, a frontend web developer, product designer and copywriter based in Lagos, Nigeria.
                </p>
                <p data-scroll>
                  I help <span className="bright">brands and startups</span> develop <span className="">fast, accessible & responsive websites</span>, design <span className="">aesthetic usable interfeaces</span> and write <span className="">compelling copy</span> to improve their online presence and brand recognition.
                </p>
              </div>
              <div className="skillset home-section">
                <h2 data-scroll>expertise</h2>
                <ul>
                  <li data-scroll>
                    <span className='label-no'>01</span>
                    <span className='label'>art direction</span>
                  </li>
                  <li data-scroll>
                    <span className='label-no'>02</span>
                    <span className='label'>user interface design</span>
                  </li>
                  <li data-scroll>
                    <span className='label-no'>03</span>
                    <span className='label'>user experience design</span>
                  </li>
                </ul>
              </div>
              <div className="home-nav home-section">
                <Link to="/" className="primary" data-scroll>Download Resume</Link>
                <Link to="/projects" className="tertiary" data-scroll>Projects <FontAwesomeIcon icon={['fas', 'arrow-right']} /></Link>
              </div>
            </section>
          )
        }
      </>
    )
  };

export default Home;