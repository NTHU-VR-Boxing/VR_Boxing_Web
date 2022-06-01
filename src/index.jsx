import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import {Provider} from 'react-redux';

import {editList} from './states/EditList-reducer.js';

import 'bootstrap/dist/css/bootstrap.css';
import Navigator from 'components/Navigator.jsx';

window.onload = function() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(combineReducers({
        editList
    }), composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)));
    // console.log(store.getState());
    ReactDOM.render(
        <Provider store={store}>
            <Navigator/>
        </Provider>,
        document.getElementById('root')
    );
};
