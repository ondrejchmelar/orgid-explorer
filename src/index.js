import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './Routes';

import '@windingtree/wt-ui/dist/styles.css';
import './assets/styles.scss';

const render = (Component) => {
  let renderMethod = ReactDOM.render;
  if (process.env.NODE_ENV === 'production') {
    renderMethod = ReactDOM.hydrate;
  }
  renderMethod(
    <AppContainer>
      <Router>
        <Component />
      </Router>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Routes, document.getElementById('root'));
