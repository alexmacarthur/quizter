import React, { Component } from 'react';
import { GAME_DATA, SHOWNQUESTIONS } from 'app/utils/constants';
import classnames from 'classnames';

import styles from '../scss/styles.scss';

export default class Option extends Component {

  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);

    this.state = {
      clickedCorrect: false,
      clickedIncorrect: false
    }
  }

  handleSelection(e) {

    if(this.props.optionValue === this.props.questionValue) {

      this.setState({
          clickedCorrect: true
      });

      GAME_DATA.correct++;
      window.updateTimer();
    } else {

      this.setState({
          clickedIncorrect: true
      });

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

    setTimeout(() => {
      this.props.onOptionClick(this.props.thisThing);
    }, 150);
  }

  render() {

    let componentClass = classnames(styles.Option,
      {
        [`${styles.clickedCorrect}`] : this.state.clickedCorrect,
        [`${styles.clickedIncorrect}`] : this.state.clickedIncorrect
      }
    );
    return (
      <li data-index={this.props.index} className={componentClass} onClick={this.handleSelection}>
        {this.props.children}
      </li>
    )
  }
}
