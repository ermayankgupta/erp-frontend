import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalState from './Context/GlobalState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalState>
      <App />
      <ToastContainer />
    </GlobalState>
);

