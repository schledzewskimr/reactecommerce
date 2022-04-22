import React from 'react';
import ReactDOM from 'react-dom';
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
