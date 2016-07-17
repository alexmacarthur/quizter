import React, { Component } from 'react';
import { SCORE, ANSWERS, NUM_ITEMS, ARRAY } from 'app/utils/constants';
import classnames from 'classnames';

import styles from './styles.scss';

export default class Option extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

    if(this.props.optionState === this.props.questionState) {
      SCORE.correct++;
      window.updateTimer();

      console.log(this.props.optionState)
    } else {
      SCORE.incorrect++;
    }

    window.updateScore();

    this.props.onUpdate(this.props.thisThing);
  }

  render() {
    return (
      <li className={styles.Option} onClick={this.handleClick}>
        {this.props.children}
      </li>
    )
  }
}
