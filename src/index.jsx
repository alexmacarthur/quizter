import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'app/components/Container';
import { SCORE, ANSWERS, NUM_ITEMS, ARRAY } from 'app/utils/constants';

window.app = ReactDOM.render(
  <Container/>,
  document.getElementById('content')
);