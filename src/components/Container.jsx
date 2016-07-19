import React, { Component } from 'react';
import { SCORE, ANSWERS, NUM_ITEMS, ARRAY } from 'app/utils/constants';
import Question from 'app/components/Question';
import Timer from 'app/components/Timer';
import FinishScreen from 'app/components/FinishScreen';
import classnames from 'classnames';

import styles from '../scss/styles.scss';

export default class Container extends Component {

  render() {
    return (
      <div className={styles.Container}>
        <Question className={styles.Question}/>
        <Timer/>
        <FinishScreen correct={SCORE.correct} incorrect={SCORE.incorrect}/>
      </div>
    )
  }
}
