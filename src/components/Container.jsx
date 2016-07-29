import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { SCORE, ANSWERS, NUM_ITEMS, ARRAY } from 'app/utils/constants';
import Question from 'app/components/Question';
import Timer from 'app/components/Timer';
import FinishScreen from 'app/components/FinishScreen';
import WelcomeScreen from 'app/components/WelcomeScreen';
import classNames from 'classnames';

import styles from '../scss/styles.scss';

export default class Container extends Component {

	constructor(props) {
		super(props);

		this.state = {
			allowRootContainerHeight : false,
			timeRemaining : true
		}
	}

	componentDidMount() {

		let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		ReactDOM.findDOMNode(this).style.minHeight = viewportHeight + "px";

		window.allowRootContainerHeight = () => {
			this.allowRootContainerHeight();
		}

		window.showFinishScreen = () => {
			this.showFinishScreen();
		}
	}

	showFinishScreen() {
		this.setState({
			timeRemaining : false
		});
	}

	allowRootContainerHeight() {
		this.setState({
			allowRootContainerHeight : true
		})
	}

	render() {

		let componentClass = classNames(
			styles.Container,
			{
				[`${styles.AsMuchHeightAsNeeded}`] : this.state.allowRootContainerHeight,
				[`${styles.ShowingFinishScreen}`] : !this.state.timeRemaining
		});

		return (
		  <div className={componentClass}>
				<WelcomeScreen />
		    <Question />
		    <Timer />
		    <FinishScreen />
		  </div>
		)
	}
}
