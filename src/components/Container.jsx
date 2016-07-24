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

		this.setState({
	    	firstQuestionIsActive : !this.state.firstQuestionIsActive,
	    	secondQuestionIsActive : !this.state.secondQuestionIsActive,
	    	firstQuestionSlideOffScreen : !this.state.firstQuestionSlideOffScreen,
	    	secondQuestionSlideOffScreen : !this.state.secondQuestionSlideOffScreen
		});

		setTimeout(() => {
			this.setState({
				setFirstQuestionNewPosition : this.state.firstQuestionSlideOffScreen,
				setSecondQuestionNewPosition : this.state.secondQuestionSlideOffScreen
			})
		}, 250);
	}

	render() {

		console.log(this.state);

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
