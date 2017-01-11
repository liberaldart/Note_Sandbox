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

//installed axios
//npm i axios --save
import axios from 'axios';

import { allReducers } from './reducers';
import { Provider } from "react-redux";
import { App } from "./components/App";

const middleware = applyMiddleware(thunk, logger());
const store = createStore(allReducers, middleware);

store.dispatch((dispatch) => {
    dispatch({ type: "FETCH_NOTES_START" });
    axios.get("http://localhost:9200/subject/note/_search")
        .then((response) => {
            dispatch({ type: "FETCH_NOTES_RECEIVED", payload: response.data });
        })
        .catch((err) => {
            dispatch({ type: "FETCH_NOTES_ERROR", payload: err });
    })
    
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
