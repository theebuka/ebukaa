import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import LocomotiveScroll from "locomotive-scroll";
import Home from './pages/home.js';
import About from './pages/about.js';
import Projects from './pages/projects.js';
import Contact from './pages/contact.js';
import Shop from './pages/shop.js';
import Misc from './pages/misc.js';
import Error from './pages/error.js';
// import LoadingScreen from './pages/loading.js';
import Playlist from './pages/playlist.js';
import Readlist from './pages/readlist.js';
import Navigation from './components/desktop-nav.js';
import Topbar from './components/topbar.js';
import Social from './components/social.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import RotatingSvg from './images/circ.svg';
import './App.css';
// import { render } from '@testing-library/react';

library.add(fab,fas);

function App() {
  // componentDidMount() {
    /* const scroll = new LocomotiveScroll();

    const scrollRef = React.createRef();
    useEffect(() => {
      this.scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true
      });
    }); */
  // }



    return (
      <Router>
      <Topbar />
      <Navigation />
     {/*<div className="js-home__disc home__disc">
          <div className="disc">
            <img src={RotatingSvg} alt="circle background" />
          </div>
      </div> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route exact path="/misc" render={({ match: { url } }) => (
          <div>
            <Route path={`${url}/`} component={Misc} exact />
            <Route path={`${url}/playlist`} component={Playlist} />
            <Route path={`${url}/readlist`} component={Readlist} />
            {/* <Route><Error /></Route> */}
          </div>
        )} />
        <Route>
          <Error />
        </Route>
      </Switch>
      <Social />
    </Router>
    )
 }  /* constructor() {
    this.state = { isLoading: true }
}

componentDidMount() {
    this.setState({isLoading: false})
}

render() {
    return(
        this.state.isLoading ? <LoadingScreen/> : <Home/>
    )
} */
  /* const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(true), 6000)
  }, [])
  
  */

export default App;
