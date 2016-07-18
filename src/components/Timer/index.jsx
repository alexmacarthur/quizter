import React, { Component } from 'react';
import classnames from 'classnames';

import { getRandomIndex } from 'app/utils/functions';
import { ARRAY } from 'app/utils/constants';

import styles from './styles.scss';

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 30000 // the initial amount of time a player starts with
    };
  }

  componentDidMount() {
    window.updateTimer = ::this.updateTimer;

    this.timeInterval = setInterval(function() {
      this.countdown();
    }.bind(this), 1000);
  }

  updateTimer() {
    this.state.count = this.state.count + 1000;
  }

  countdown() {
    this.setState({count: this.state.count - 1000});

    if (this.state.count === 0) {
      clearInterval(this.timeInterval);
      window.showFinishScreen();
      return;
    }
  }

  render() {
    return (
      <div className="Countdown">
        <span>Time Remaining: </span>
        <span id="seconds">{this.state.count/1000}</span>
      </div>
    )
  }
}
