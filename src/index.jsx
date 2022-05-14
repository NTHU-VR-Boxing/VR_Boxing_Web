import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import {Provider} from 'react-redux';

import Main from 'components/Main.jsx';
import {post} from 'states/post-reducers.js';
import {postEdit} from 'states/postEdit-reducer.js';
import {diary} from './states/post-reducers';

import 'bootstrap/dist/css/bootstrap.css';
window.onload = function() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(combineReducers({
        postEdit, post, diary
    }), composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)));
    console.log(store.getState());
    ReactDOM.render(
        <Provider store={store}>
            <Main/>
        </Provider>,
        document.getElementById('root')
    );
};
