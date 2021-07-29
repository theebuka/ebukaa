import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component {
    /* constructor(props) {
        super(props)
      this.backgrounds = [HomeImage1, HomeImage7]
      this.state = { backgroundIndex: 0 }
      
      this.changeBackground = this.changeBackground.bind(this)
    }
  
    componentDidMount () {
      this.timeout = setTimeout(
        this.changeBackground,
        this.props.animDuration * 1000
      )

      
    }
    
    componentWillUnmount() {
        if (this.timeout) clearTimeout(this.timeout)
    }
  
    changeBackground () {
      this.setState(function ({ backgroundIndex }) {
        const nextBackgroundIndex = ++backgroundIndex % this.backgrounds.length
  
        return { backgroundIndex: nextBackgroundIndex }
      }, function () {
        this.timeout = setTimeout(
          this.changeBackground,
          this.props.animDuration * 1000
        )
      })
    };
 */
    /* componentDidMount() {
      const scroll = new LocomotiveScroll({
        el: document.querySelector(".Home"),
        smooth: true
      });
    } */
    // this.backgrounds[this.state.backgroundIndex]
   

    render() {
      return (
        <section className="Home" data-scroll-section>
          <div>
          <p className="paragraph" data-scroll><span className="bright">Hello</span>.</p>
          <p className="paragraph" data-scroll>I'm <span className="bright">Ebuka Nwaju</span>, a <span className="bright">Developer</span>, <span className="bright">Product Designer</span> and <span className="bright">Creative Writer</span> based in <span className="bright">Lagos</span>.</p>
            {/* <CTA className="primary" type="button" label="Browse Projects" text="Browse Projects" /> */}
          <Link to="/projects" className="primary">Browse Projects</Link>
          <Link to="/about" className="tertiary">To next page <FontAwesomeIcon icon={['fas', 'arrow-right']} /></Link>
          </div>
        </section>
      )
    }
};

export default Home;