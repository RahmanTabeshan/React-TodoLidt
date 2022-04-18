import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const container = document.querySelector("div.container")
const Root = ReactDOM.createRoot(container);

Root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

