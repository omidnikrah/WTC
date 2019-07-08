import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import GlobalStyles from './global-styles';
import HomePage from '../containers/Home';
import ProjectPage from "../containers/Project";

export default () => (
  <React.Fragment>
    <GlobalStyles />
    <HashRouter>
      <React.Fragment>
          <Route path="/" component={HomePage} exact />
          <Route path="/project/:projectName" component={ProjectPage} />
      </React.Fragment>
    </HashRouter>
  </React.Fragment>
);
