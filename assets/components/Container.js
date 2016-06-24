import React from 'react';
import { Question } from '../components/Question';
import { Timer } from '../components/Timer';
import { FinishScreen } from '../components/FinishScreen';
import { SCORE, ANSWERS, NUM_ITEMS, ARRAY } from '../utils/constants';  

class Container extends React.component {
  render : function() {
    return (
      <div className="Wrapper">
        <Question/>
        <Timer/>
        <FinishScreen correct={SCORE.correct} incorrect={SCORE.incorrect}/>
      </div>
    )
  }
}