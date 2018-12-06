import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reducers from './reducers';
import middleware from './middleware';
import { createStore } from 'redux';

const store = createStore(reducers, middleware);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
