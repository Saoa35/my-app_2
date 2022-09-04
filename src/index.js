import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { legacy_createStore } from 'redux';


const initialState = 2;

const reducer = (state = initialState, action) => {
  if(action.type = 'INC') {
    return state + 1;
  } else return state;
}

const store = legacy_createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
