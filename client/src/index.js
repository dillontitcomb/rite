import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthState from './context/auth/AuthState';

ReactDOM.render(
  <AuthState>
    <App />
  </AuthState>,
  document.getElementById('root')
);
