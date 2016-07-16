import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

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
  }

  showFinishScreen() {
    this.setState({
      timeRemaining : false
    });
  }

  calculateScore() {
    return this.props.correct;
  }

  render() {

    let componentClass = classNames(
      styles.FinishScreen, 
      { 
        'is-visible' : !this.state.timeRemaining
      });

    return (
      <div className={componentClass}>
        <h2>You are finished!</h2>
        <span>Your final score is: {this.calculateScore()}</span>
      </div>
    )
  }
}

export default FinishScreen;