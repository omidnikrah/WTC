import React, {Fragment} from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import GlobalStyles from "./global-styles";
import Routes from "./Routes";

render(
  <AppContainer>
      <Fragment>
          <GlobalStyles />
          <Routes />
      </Fragment>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./Routes', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./Routes').default;
    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
