import { BrowserRouter } from 'react-router-dom'
import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
require('typeface-open-sans');

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root')
);
