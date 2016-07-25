import React, { Component } from 'react';
import { SCORE, ANSWERS, NUM_ITEMS, ARRAY } from 'app/utils/constants';
import Question from 'app/components/Question';
import Timer from 'app/components/Timer';
import FinishScreen from 'app/components/FinishScreen';
import classnames from 'classnames';

import styles from '../scss/styles.scss';

export default class Container extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	firstQuestionIsActive : true,
	    	secondQuestionIsActive : false,
	    	firstQuestionSlideOffScreen : false,
	    	secondQuestionSlideOffScreen : false,
	    	setFirstQuestionNewPosition: false,
	    	setSecondQuestionNewPosition : false
	    };
	  }

	componentDidMount() {
		window.setActiveQuestion = ::this.setActiveQuestion;
	}

	setActiveQuestion() {

		/* 	Swap the 'active' status of each question,
			and make the current active slide (BEFORE updating the state) slide off screen.

			MEANING: Only the currently active question will get the SlideOffScreen class. 
		*/
		this.setState({
	    	firstQuestionIsActive : !this.state.firstQuestionIsActive,
	    	secondQuestionIsActive : !this.state.secondQuestionIsActive,
	    	firstQuestionSlideOffScreen : this.state.firstQuestionIsActive,
	    	secondQuestionSlideOffScreen : this.state.secondQuestionIsActive,
			setFirstQuestionNewPosition : false,
			setSecondQuestionNewPosition : false,
		});

		/*	Set the new position of the question that was just moved off the screen to the opposite side,
			to give the effect that new questions are just rolling in as needed. 
			
			MEANING: Only the inactive question should get the SetNewPosition class.
		*/
		setTimeout(() => {
			this.setState({
				setFirstQuestionNewPosition : !this.state.firstQuestionIsActive,
				setSecondQuestionNewPosition : !this.state.secondQuestionIsActive,
			})
		}, 250);
	}

	render() {

		let firstQuestionClasses = classnames({
			[`${styles.ActiveQuestion}`] : this.state.firstQuestionIsActive,
			[`${styles.SlideOffScreen}`] : this.state.firstQuestionSlideOffScreen,
			[`${styles.SetNewPosition}`] : this.state.setFirstQuestionNewPosition
		}); 

		let secondQuestionClasses = classnames({
			[`${styles.ActiveQuestion}`] : this.state.secondQuestionIsActive,
			[`${styles.SlideOffScreen}`] : this.state.secondQuestionSlideOffScreen,
			[`${styles.SetNewPosition}`] : this.state.setSecondQuestionNewPosition
		});

		return (
		  <div className={styles.Container}>
		    <Question className={firstQuestionClasses} />
		    <Question className={secondQuestionClasses} />
		    <Timer/>
		    <FinishScreen correct={SCORE.correct} incorrect={SCORE.incorrect}/>
		  </div>
		)
	}
}
