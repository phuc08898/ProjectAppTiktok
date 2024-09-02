import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from '/App'; // Sử dụng alias cho App.js
import reportWebVitals from './reportWebVitals';
import App from '~/App'; // Đảm bảo App.js nằm trong src
// Import từ thư mục components

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
