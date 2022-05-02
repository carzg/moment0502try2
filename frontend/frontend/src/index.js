import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { reducers } from './reducers/index'
import './index.css'

import { compose, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


