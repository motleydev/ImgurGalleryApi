import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <AppContainer>
    <App />
  </AppContainer>
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default; // eslint-disable-line global-require
    ReactDOM.render(
      <Provider store={store}>
      <AppContainer>
        <NextApp />
      </AppContainer>
      </Provider>,
      document.getElementById('app')
    );
  });
}
