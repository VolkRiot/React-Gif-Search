import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

export const history = createHistory();

export const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(reduxThunk, routerMiddleware(history)),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
