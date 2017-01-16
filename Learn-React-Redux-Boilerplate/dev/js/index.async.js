import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import * as notes_actions from './actions/notes_action';

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
/**
 *npm i -S redux-axios-middleware
 */
import axiosMiddleware from 'redux-axios-middleware';

import { allReducers } from './reducers';
import { Provider } from "react-redux";
import { App } from "./components/App";

const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:'http://localhost:9200/subject',
  responseType: 'json'
});

const middleware = applyMiddleware(thunk, logger(), axiosMiddleware(client));
const store = createStore(allReducers, middleware);

// store.dispatch((dispatch) => {
//     dispatch(notes_actions.get_notes_started());
//     axios.get("http://localhost:9200/subject/note/_search")
//         .then((response) => {
//             dispatch(notes_actions.get_notes_received(response.data));
//         })
//         .catch((err) => {
//             dispatch(notes_actions.get_notes_error(err));
//     })
    
// });

store.dispatch((dispatch) => {
    notes_actions.axios_middleware_notes_actions();
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
