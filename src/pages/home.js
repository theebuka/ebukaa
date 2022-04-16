import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Badge from './../components/badge.js';

class Home extends Component {
    
    componentDidMount() {
      // eslint-disable-next-line
      const scroll = new LocomotiveScroll({
        el: document.querySelector(".Home"),
        smooth: true
      });
    }

    render() {
      return (
        <section className="Home" data-scroll-section>
          {/* <div>
            <p className="paragraph" data-scroll>I'm <span className="bright">Chukwuebuka Nwaju</span>, a <span className="bright">Developer</span> and <span className="bright">Product Designer</span> based in <span className="bright">Lagos</span>.</p>
            <Badge />
            <Link to="/projects" className="primary">Browse Projects</Link>
            <Link to="/about" className="tertiary">About <FontAwesomeIcon icon={['fas', 'arrow-right']} /></Link>
          </div> */}
          <div>
            <h1 className='name' data-scroll>
              <span className=''>Chukwueb<span className="alt">x</span>ka</span> <span classNmae="">Nwaju.</span>
            </h1>
            <h2 className='title' data-scroll>Frontend developer. Product designer. Human.</h2>
          </div>
          <div>
            {/* <Badge /> */}
            <h3 className='scroll-effect' data-scroll data-scroll-direction="hrizontal" data-scroll-speed="-8" data-scroll-target="#direction"> Keep scrolling, almost there</h3>
            <h3 className='scroll-effect' data-scroll data-scroll-direction="hrizontal" data-scroll-speed="-8" data-scroll-target="#direction"> Yep, you guessed it</h3>
            <h3 className='scroll-effect' data-scroll data-scroll-direction="hrizontal" data-scroll-speed="-8" data-scroll-target="#direction"> These are just fillers lol</h3>
          </div>
          <div>
            <p data-scroll>
              I help <span className="">brands and startups</span> develop <span className="">fast, accessible & responsive websites</span>, design <span className="">aesthetic usable interfeaces</span> and write <span className="">compelling copy</span> to improve their online presence and brand recognition.
            </p>
            <Link to="/projects" className="primary" data-scroll>Download Resume</Link>
            <Link to="/projects" className="tertiary" data-scroll>Projects <FontAwesomeIcon icon={['fas', 'arrow-right']} /></Link>
          </div>
        </section>
      )
    }
};

export default Home;