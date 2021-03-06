import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './reducers';

import registerServiceWorker from './registerServiceWorker';

import thunk from "redux-thunk";

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();