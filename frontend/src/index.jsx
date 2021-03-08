import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

ReactDOM.render(
  <>
    <Routes />
    <ToastContainer position="bottom-left" />
  </>,
  document.getElementById('root'),
);
