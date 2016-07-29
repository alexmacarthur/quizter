import React, { Component } from 'react';
import { GAME_DATA, SHOWNQUESTIONS } from 'app/utils/constants';
import classnames from 'classnames';

import styles from '../scss/styles.scss';

export default class Option extends Component {

  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(e) {

    if(this.props.optionValue === this.props.questionValue) {
      GAME_DATA.correct++;
      window.updateTimer();
    } else {
      GAME_DATA.incorrect++;

      GAME_DATA.incorrect_questions.push({
        index : GAME_DATA.incorrect_questions.length,
        state : this.props.questionValue,
        yourAnswer : this.props.children,
        correctAnswer : this.props.optionCorrectAnswer
      });
    }

    // push to SHOWNQUESTIONS array so we don't show a question that's already been shown.
    SHOWNQUESTIONS.push(this.props.questionValue);

    window.updateScore();

    this.props.onOptionClick(this.props.thisThing);
  }

  render() {
    return (
      <li data-index={this.props.index} className={classnames(styles.Option, this.props.className)} onClick={this.handleSelection}>
        {this.props.children}
      </li>
    )
  }
}
