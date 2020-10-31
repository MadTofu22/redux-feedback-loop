import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = (state={}, action) => {

    /* Feedback Reducer State:
        state = {
            feeling: null,
            understanding: null,
            support: null,
            comments: ''
        } 
    */

    switch (action.type) {
        default: 
            return state;
        case 'FEELING_INPUT':
            return {...state, feeling: action.input};
        case 'UNDERSTANDING_INPUT':
            return {...state, understanding: action.input};
        case 'SUPPORT_INPUT':
            return {...state, support: action.input};
        case 'COMMENTS_INPUT':
            return {...state, comments: action.input};
    }
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();