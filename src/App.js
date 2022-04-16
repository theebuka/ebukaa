import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Home, Projects, Contact, Shop, Space, Error, Playlist, Readlist } from './index.js';

import Navigation from './components/desktop-nav.js';
import Topbar from './components/topbar.js';
// import Social from './components/social.js';y
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import RotatingSvg from './images/circ.svg';
import './App.css';
import BlackIvy from './pages/design/blackivy.js';
import Footer from './components/footer.js';
// import { render } from '@testing-library/react';

library.add(fab,fas);

function App() {
  return (
    <Router>

    <Topbar />
    <Navigation />

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      {/* <Route path="/about">
        <About />
      </Route> */}

      <Route path="/projects" render={({ match: { url } }) => (
        <div>
          <Route path={`${url}/`} component={Projects} exact />
          <Route path={`${url}/blackivy`} component={BlackIvy} />
          <Route path={`${url}/readlist`} component={Readlist} />
        </div>
      )} />

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/shop">
        <Shop />
      </Route>

      <Route path="/space" render={({ match: { url } }) => (
        <div>
          <Route path={`${url}/`} component={Space} exact />
          <Route path={`${url}/playlist`} component={Playlist} />
          <Route path={`${url}/readlist`} component={Readlist} />
          {/* <Route path={`${url}/watchlist`} component={Readlist} /> */}
         {/*  <Route path={`${url}/tools`} component={Readlist} />
          <Route path={`${url}/learning-resources`} component={Readlist} />
          <Route path={`${url}/Maestros`} component={Readlist} />
          <Route path={`${url}/Vendors`} component={Readlist} />
          <Route path={`${url}/thoughts`} component={Readlist} />
          <Route path={`${url}/wishlist`} component={Readlist} /> */}
        </div>
      )} />

      <Route>
        <Error />
      </Route>
    </Switch>

    <Footer />
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
