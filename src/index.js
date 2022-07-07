import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

axios.defaults.headers.common = {
  Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzY4ZDhlYzAzYTJlZWUzMGE3NzEyYiIsImVtYWlsIjoibmFvbWlfcmVpbGx5QHlhaG9vLmNvbSIsImlhdCI6MTY1NzE5MDk0OCwiZXhwIjoxNjU3NzkwOTQ4fQ._jTbApkQEz0gAIjZTun_Znv4l0JhFEOfZ3WEdv1XZ_s"
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
