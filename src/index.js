import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import rootReducer from '@root/reducers';
import rootSaga from '@root/sagas';

const sagaMiddleware = createSagaMiddleware();
const enhancers = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const store = createStore(
    rootReducer,
    enhancers,
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>
    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
