import React, { Component } from 'react';
import classnames from 'classnames';

import { getRandomIndex } from 'app/utils/functions';
import { ARRAY } from 'app/utils/constants';

import styles from '../scss/styles.scss';

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 30000 // the initial amount of time a player starts with
    };
  }

  componentDidMount() {
    window.thisTimer = this;
    window.updateTimer = this.updateTimer;
    window.startTimer = this.startTimer;
  }

  startTimer() {
    let _this = window.thisTimer;
    _this.timeInterval = setInterval(() => {
      _this.countdown();
    }, 1000);
  }

  updateTimer() {
    thisTimer.state.count = thisTimer.state.count + 1000;
  }

  countdown() {
    this.setState({count: this.state.count - 1000});

    if (this.state.count === 0) {
      clearInterval(this.timeInterval);
      window.showFinishScreen();

      setTimeout(() => {
        window.allowRootContainerHeight();
      }, 250);
    }
  }

  render() {
    return (
      <div className={classnames(styles.Timer, this.props.className)}>
        <span>Time Remaining: </span>
        <span id="seconds">{this.state.count/1000}</span>
      </div>
    )
  }
}
