// @flow
import React, { Component } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
// import type { Store } from '../reducers/types';
import Routes from './Routes';

type Props = {
  store: any,
  history: {}
};


export default class Root extends Component<Props> {
  render() {
    const { history } = this.props;
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}
