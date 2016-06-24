import React, { Component } from 'react';
import classnames from 'classnames';

import { getRandomIndex } from 'app/utils/functions';
import { ARRAY } from 'app/utils/constants'; 

import styles from './styles.scss';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 30000,
    //   interval: setInterval(this.countdown, 1000)
    };
  }

  componentWillMount() {
    // window.updateTimer = ::this.updateTimer;
  }

  updateTimer(time) {
    let newState = {
      count: this.state.count + 5000
    };

    this.setState(newState);
  }

  countdown() {
    console.log(this);
    this.setState({count: this.state.count - 1000});

    if (this.state.count <= 0) {
      clearInterval(this.state.interval);
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
export default Timer;