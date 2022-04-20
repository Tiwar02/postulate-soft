import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Routes, Route } from 'react-router-dom';


//Import Axios
import Axios from 'axios'
Axios.defaults.baseURL='http://localhost:8000'
//Import React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

