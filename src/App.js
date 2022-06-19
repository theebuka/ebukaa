import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingScreen from './pages/loading.js';
import { Home, Work, Contact, Shop, Space, Error } from './index.js';
import { Lists, Thoughts, People, Resources, Wishlist } from './index.js';
import { BlackIvy } from './index.js';
import Navigation from './components/desktop-nav.js';
import Topbar from './components/topbar.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Footer from './components/footer.js';
import './App.css';

library.add(fab, fas);

function App() {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(3);
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1)
    }, 1000)
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      {preloader ? ( <LoadingScreen /> ) : (
          <Router>

            <Topbar />
            <Navigation />

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/work" render={({ match: { url } }) => (
                <div>
                  <Route path={`${url}/`} component={Work} exact />
                  <Route path={`${url}/blackivy`} component={BlackIvy} />
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
                  <Route path={`${url}/lists`} component={Lists} />
                  <Route path={`${url}/thoughts`} component={Thoughts} />
                  <Route path={`${url}/people`} component={People} />
                  <Route path={`${url}/resources`} component={Resources} />
                  <Route path={`${url}/wishlist`} component={Wishlist} />
                </div>
              )} />

              <Route>
                <Error />
              </Route>
            </Switch>

            <Footer />
          </Router>
        )
      }
    </>
  )
}

export default App;
