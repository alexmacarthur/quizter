import React, { Component } from 'react';
import classNames from 'classnames';
import { SCORE } from 'app/utils/constants.js';

import styles from '../scss/styles.scss';

class FinishScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      timeRemaining : true
    }
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
        <div className={classNames(styles.Container)}>
          <h2>You are finished!</h2>
          <span>Your final score is: {SCORE.correct}</span>
        </div>
      </div>
    )
  }
}

export default FinishScreen;
