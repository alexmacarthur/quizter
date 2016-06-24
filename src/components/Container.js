import React, { Component } from 'react';
import { SCORE, ANSWERS, NUM_ITEMS, ARRAY } from 'app/utils/constants'; 
import Question from 'app/components/Question';
import Timer from 'app/components/Timer';
import FinishScreen from 'app/components/FinishScreen'; 

class Container extends Component {
	
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