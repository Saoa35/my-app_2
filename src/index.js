import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';


const initialState = 2;

const reducer = (state = initialState, action) => {
  if(action.type = 'INC') {
    return state + 1;
  } else return state;
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
