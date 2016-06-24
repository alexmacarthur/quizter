import React from 'react';

class Question extends React.component {
  
  getInitialState : function() {
    var rand = this.getRandomIndex();

    return {
      index : rand,
      state : ARRAY[rand][0]
    }
  },

  shuffle : function(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    } 
    return a;
  },

  getRandomIndex : function() {
    return Math.floor(Math.random() * NUM_ITEMS);
  },

  handleClick: function(e) {
    if(e.target.getAttribute('data-state') === this.state.state) {
      SCORE.correct++;

      window.updateTimer();

    } else {
      SCORE.incorrect++;
    }

    // show the score
    console.log('Correct: ' + SCORE.correct);
    console.log('Incorrect: ' + SCORE.incorrect);

    // update component with new question
    var rand = Math.floor(Math.random() * NUM_ITEMS);
    this.setState({
      index: rand,
      state : ARRAY[rand][0]
    });

  },

  render: function() {  

    var correctOption = [ARRAY[this.state.index]]; 
    var cleanedArray = ARRAY.slice();
    cleanedArray.splice(this.state.index, 1);
    var otherOptions = this.shuffle(cleanedArray).slice(0, 3);
    var options = this.shuffle(correctOption.concat(otherOptions));

    return (
      <div className="Question">
        {this.state.state}
        <ul className="List">

          {options.map(function(item) {
            return <li data-state={item[0]} onClick={this.handleClick} key={item[1]}>{item[1]}</li>;
          }.bind(this))}

        </ul>
      </div>
    );
  }
}
