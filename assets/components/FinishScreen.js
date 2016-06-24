import React from 'react';

class FinishScreen extends React.component {
  
  componentDidMount : function() {

    // var elem = ReactDOM.findDOMNode(this);

    // elem.style.opacity = 0;

    // window.requestAnimationFrame(function() {
    //     elem.style.transition = "opacity 2500ms";
    //     elem.style.opacity = 1;
    // });

  },

  calculateScore : function() {
    return this.props.correct;
  },

  render : function() {
    return (
      <div className="FinishScreen">
        <h2>You are finished!</h2>
        <span>Your final score is: {this.calculateScore()}</span>
      </div>
    )
  }

}