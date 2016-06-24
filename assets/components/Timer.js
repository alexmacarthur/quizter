import React from 'react';

class Timer extends React.component {
  
  getInitialState: function() {
    return {
      count: 30000,
      interval: setInterval(this.countdown, 1000)
    };
  },

  componentWillMount : function() {
    window.updateTimer = (time) => {
      var newTime = this.state.count + 5000;
      this.setState({
        count: newTime}
      );
    }
  },

  countdown : function() {
    this.setState({count: this.state.count - 1000});

    if (this.state.count <= 0) {
      clearInterval(this.state.interval);
      return;
    }
  },

  render: function() {
    return ( 
      <div className="Countdown">
        <span>Time Remaining: </span>
        <span id="seconds">{this.state.count/1000}</span>
      </div>
    )
  }
}