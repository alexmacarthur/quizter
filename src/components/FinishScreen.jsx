import React, { Component } from 'react';
import classNames from 'classnames';
import { GAME_DATA } from 'app/utils/constants.js';

import styles from '../scss/styles.scss';

class FinishScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      timeRemaining : true
    }
  }

  componentDidMount() {

    window.updateScore = () => {
      this.forceUpdate();
    }
  }

  componentDidUpdate() {
    let $container = document.querySelector('.' + styles.Container + '.' + styles.AsMuchHeightAsNeeded);

    if($container) {
      let containerHeight = $container.scrollHeight;
      console.log(containerHeight);
    }
  }

  render() {

    let totalQuestions = GAME_DATA.correct + GAME_DATA.incorrect;

    return (
      <div className={styles.FinishScreen}>
        <div className={classNames(styles.InnerContainer)}>
          <h2>Great job!</h2>
          <span>You answered {GAME_DATA.correct} out of {totalQuestions} correctly.</span>
          <h3>Final Score: {GAME_DATA.correct}</h3>

          <h4>Incorrect Answers</h4>
          <table className={styles.ResultsTable}>
            <thead>
              <tr>
                <th>State</th>
                <th>Your Answer</th>
                <th>Correct Answer</th>
              </tr>
            </thead>
            <tbody>
              {GAME_DATA.incorrect_questions.map(function(item) {
                return (
                  <tr key={item.index}>
                    <td>{item.state}</td>
                    <td>{item.yourAnswer}</td>
                    <td>{item.correctAnswer}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default FinishScreen;
