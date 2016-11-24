import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';

function reduxStore(initialState) {

  const logger = createLogger();
  const store = createStore(
    reducers,
    applyMiddleware(thunk,logger),
    initialState,
    window.devToolsExtension && window.devToolsExtension());

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // We need to require for hot reloadign to work properly.
      const nextReducer = require('../reducers');  // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default reduxStore;
