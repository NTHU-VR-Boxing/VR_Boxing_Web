import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import {Provider} from 'react-redux';
import axios from 'axios';

import { editList } from './states/EditList-reducer.js';
import { list } from './states/List-reducer.js';
import  {record } from './states/Record-reducer.js';
import { login } from './states/Login-reducer.js';
import { register } from './states/Register-reducer.js';
import { editRecord } from './states/EditRecord-reducer.js';

import 'bootstrap/dist/css/bootstrap.css';
import Navigator from 'components/Navigator.jsx';

window.onload = function() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(combineReducers({
        editList, list, record, login, register, editRecord
    }), composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)));

    axios.defaults.withCredentials = true;
    // console.log(store.getState());

    ReactDOM.render(
        <Provider store={store}>
            <Navigator/>
        </Provider>,
        document.getElementById('root')
    );
};
