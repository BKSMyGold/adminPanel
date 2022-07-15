import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

axios.defaults.headers.common = {
  Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDEyM2Y1N2UzYjA5MzMwNjg5MGQwMyIsImVtYWlsIjoiZ3VwdGEubmlzY2hhbDAxNEBnbWFpbC5jb20iLCJpYXQiOjE2NTc4ODM2OTYsImV4cCI6MTY1ODQ4MzY5Nn0.V0rk_8B5saMB2VPtHrWl2gFBLrvwuhnTGh5LytWPKI4"


}

ReactDOM.render(

  <BrowserRouter>

    <App />

  </BrowserRouter>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
