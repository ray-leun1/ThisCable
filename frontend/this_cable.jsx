import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Alright, I'm done</h1>, root);

  window.sessionUtil = sessionUtil;
});