import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export { default as Home } from './pages/home.js';
// export { default as About } from './pages/about.js';
export { default as Work } from './pages/work.js';
export { default as Contact } from './pages/contact.js';
export { default as Shop } from './pages/shop.js';
export { default as Space } from './pages/space.js';
export { default as Error } from './pages/error.js';
export { default as LoadingScreen } from './pages/loading.js';
export { default as Lists } from './pages/space-pages/lists.js';
export { default as Thoughts } from './pages/space-pages/thoughts.js';
export { default as People } from './pages/space-pages/people.js';
export { default as Resources } from './pages/space-pages/resources.js';
export { default as Wishlist } from './pages/space-pages/wishlist.js';
export { default as BlackIvy } from './pages/design-pages/blackivy.js';
export { default as Article1 } from './pages/writing-pages/article-1.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
