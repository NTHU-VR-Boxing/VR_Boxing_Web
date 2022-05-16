import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import {Provider} from 'react-redux';

import {post} from 'states/post-reducers.js';
import {postEdit} from 'states/postEdit-reducer.js';
import {diary} from './states/post-reducers';

import 'bootstrap/dist/css/bootstrap.css';
import Login from 'components/Login.jsx';
//import NavBar from 'components/NavBar.jsx';
// import { Navigator } from 'components/Navigator.jsx';

window.onload = function() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(combineReducers({
        postEdit, post, diary
    }), composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)));
    // console.log(store.getState());
    ReactDOM.render(
        <Provider store={store}>
            <Login/>
            {/* <NavBar /> */}
            {/* <Navigator/> */}
        </Provider>,
        document.getElementById('root')
    );
};
