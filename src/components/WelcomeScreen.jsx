import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import styles from '../scss/styles.scss';

export default class WelcomeScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isVisible : true
    }

    this.startGame = this.startGame.bind(this);
  }

  startGame() {

    this.setState({
      isVisible : false
    });

    // Actually start the timer only after the opacity transition has finished.
    setTimeout(() => {
      window.startTimer();
    }, 250);
  }

  render() {

		let componentClass = classNames(
			styles.WelcomeScreen,
			{
				[`${styles.isInvisible}`] : !this.state.isVisible
		});

    return(
      <div className={classNames(componentClass)}>
        <div className={classNames(styles.InnerContainer)}>
          <h1 className={classNames(styles['WelcomeScreen-header'])}>Welcome!</h1>
          <span className={classNames(styles['WelcomeScreen-instructions'])}>These are your instructions.</span>
          <a className={classNames(styles['WelcomeScreen-button'])} onClick={this.startGame}>Start</a>
        </div>
      </div>
    );
  }
}
