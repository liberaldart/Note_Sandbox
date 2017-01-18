import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
//applyMiddleware added for Async functionality
import {applyMiddleware, createStore} from "redux";
//installed redux-logger for logging state before and after
//npm i redux-logger --save
import logger from 'redux-logger';
//installed redux-thunk 
//npm i redux-thunk --save
import thunk from 'redux-thunk';  

//npm i S redux-promise-middleware
import promise from 'redux-promise-middleware';  

//installed axios
//npm i axios --save
import axios from 'axios';

import { allReducers } from './reducers';
import { Provider } from "react-redux";
import { App } from "./components/App";


const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(allReducers, middleware);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
