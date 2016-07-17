import React, { Component } from 'react';
import classNames from 'classnames';
import { SCORE } from 'app/utils/constants.js';

import styles from './styles.scss';

class FinishScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      timeRemaining : true
    }

    console.log(SCORE);
  }

  componentDidMount() {
    window.showFinishScreen = () => {
      this.showFinishScreen();
    }

    window.updateScore = () => {
      this.forceUpdate();
    }
  }

  showFinishScreen() {
    this.setState({
      timeRemaining : false
    });
  }

  render() {

    let componentClass = classNames(
      styles.FinishScreen, 
      { 
        [`${styles.isVisible}`] : !this.state.timeRemaining
      });

    return (
      <div className={componentClass}>
        <h2>You are finished!</h2>
        <span>Your final score is: {SCORE.correct}</span>
      </div>
    )
  }
}

export default FinishScreen;