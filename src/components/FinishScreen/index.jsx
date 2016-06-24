import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

class FinishScreen extends Component {
  componentDidMount() {

    // var elem = ReactDOM.findDOMNode(this);

    // elem.style.opacity = 0;

    // window.requestAnimationFrame(function() {
    //     elem.style.transition = "opacity 2500ms";
    //     elem.style.opacity = 1;
    // });

  }

  calculateScore() {
    return this.props.correct;
  }

  render() {
    return (
      <div className={classnames(this.props.className, styles.FinishScreen)}>
        <h2>You are finished!</h2>
        <span>Your final score is: {this.calculateScore()}</span>
      </div>
    )
  }

}

export default FinishScreen;