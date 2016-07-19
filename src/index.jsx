import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'app/components/Container.jsx';

import styles from './scss/styles.scss';

window.app = ReactDOM.render(
  <Container/>,
  document.getElementById('content')
);
