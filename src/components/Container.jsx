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
	    	secondQuestionIsActive : false
	    };
	  }

	componentDidMount() {
		window.setActiveQuestion = ::this.setActiveQuestion;
	}

	setActiveQuestion() {
		this.setState({
	    	firstQuestionIsActive : !this.state.firstQuestionIsActive,
	    	secondQuestionIsActive : !this.state.secondQuestionIsActive
		})
	}

	render() {

		let firstQuestionActiveStatus = classnames({
			[`${styles.ActiveQuestion}`] : this.state.firstQuestionIsActive
		});

		let secondQuestionActiveStatus = classnames({
			[`${styles.ActiveQuestion}`] : this.state.secondQuestionIsActive
		});

		return (
		  <div className={styles.Container}>
		    <Question className={firstQuestionActiveStatus} />
		    <Question className={secondQuestionActiveStatus} />
		    <Timer/>
		    <FinishScreen correct={SCORE.correct} incorrect={SCORE.incorrect}/>
		  </div>
		)
	}
}
