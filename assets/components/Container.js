import React from 'react';
import { SCORE, ANSWERS, NUM_ITEMS, ARRAY } from '../utils/constants'; 
import Question from '../components/Question';
import Timer from '../components/Timer';
import FinishScreen from '../components/FinishScreen'; 

class Container extends React.component {
	
  render() {
    return (
      <div className="Wrapper">
        <Question/>
        <Timer/>
        <FinishScreen correct={SCORE.correct} incorrect={SCORE.incorrect}/>
      </div>
    )
  }
}

export default Container;