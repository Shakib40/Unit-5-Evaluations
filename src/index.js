import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider as ReactProvider } from 'react-redux';
import {store} from './Store/store';

import { BrowserRouter  } from 'react-router-dom';

import {AuthContextProvider} from './Context/AuthContext';


import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <AuthContextProvider>
  <React.StrictMode>
   <BrowserRouter>
    <ReactProvider store={store}>
      <App />
    </ReactProvider>
    </BrowserRouter>
  </React.StrictMode>
  </AuthContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
