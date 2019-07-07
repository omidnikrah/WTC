import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import GlobalStyles from './global-styles';
import HomePage from '../containers/Home';

export default () => (
  <React.Fragment>
    <GlobalStyles />
    <HashRouter>
      <React.Fragment>
        <Route path="/" component={HomePage} exact />
      </React.Fragment>
    </HashRouter>
  </React.Fragment>
);
