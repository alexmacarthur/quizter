import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container.js';
import { SCORE, ANSWERS, NUM_ITEMS, ARRAY } from './utils/constants.js';

window.app = ReactDOM.render(
  <Container/>,
  document.getElementById('content')
);