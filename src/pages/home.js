import React, {Component} from 'react';
import locomotiveScroll from "locomotive-scroll";
import HomeImage1 from './../images/img-6.png';
// import HomeImage2 from './../images/img-7.png';
// import HomeImage4 from './../images/img-8.png';
import HomeImage7 from './../images/img-12.png';

class Home extends Component {
    constructor(props) {
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

      /* const scroll = new locomotiveScroll({
        el: document.querySelector(".home"),
        smooth: true
      }); */
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

    /* componentDidMount() {
      const scroll = new locomotiveScroll({
        el: document.querySelector(".App"),
        smooth: true
      });
    } */

    render() {
      return (
        <section className="home" data-scroll-section>
          <div className="container" data-scroll>
            <span className="glitch" data-text="Developer.">Developer<span className="period">.</span></span>
            <span className="glitch" data-text="Designer.">Designer<span className="period">.</span></span>
            <span className="glitch" data-text="Creative.">Writer<span className="period">.</span></span>
          </div>
          <div className="home-images">
            <img src={this.backgrounds[this.state.backgroundIndex] } className="home-image" alt="objects in taste with the author's aesthetic" />
          </div>
        </section>
      )
    }
};

export default Home;