const SCORE = {
  correct: 0,
  incorrect: 0
}

const ANSWERS = {
  "AL": "Montgomery",
  "AK": "Juneau",
  "AS": "Pago Pago",
  "AZ": "Phoenix",
  "AR": "Little Rock",
  "CA": "Sacramento",
  "CO": "Denver",
  "CT": "Hartford",
  "DE": "Dover",
  "DC": "District Of Columbia",
  "FM": "Palikir",
  "FL": "Tallahassee",
  "GA": "Atlanta",
  "GU": "Hagåtña",
  "HI": "Honolulu",
  "ID": "Idaho",
  "IL": "Boise",
  "IN": "Indianapolis",
  "IA": "Des Moines",
  "KS": "Topeka",
  "KY": "Frankfort",
  "LA": "Baton Rouge",
  "ME": "Augusta",
  "MH": "Majuro",
  "MD": "Annapolis",
  "MA": "Boston",
  "MI": "Lansing",
  "MN": "Saint Paul",
  "MS": "Jackson",
  "MO": "Jefferson City",
  "MT": "Helena",
  "NE": "Lincoln",
  "NV": "Carson City",
  "NH": "Concord",
  "NJ": "Trenton",
  "NM": "Santa Fe",
  "NY": "Albany",
  "NC": "Raleigh",
  "ND": "Bismarck",
  "MP": "Saipan",
  "OH": "Columbus",
  "OK": "Oklahoma City",
  "OR": "Salem",
  "PW": "Palau",
  "PA": "Harrisburg",
  "PR": "San Juan",
  "RI": "Providence",
  "SC": "Columbia",
  "SD": "Pierre",
  "TN": "Nashville",
  "TX": "Austin",
  "UT": "Salt Lake City",
  "VT": "Montpelier",
  "VI": "Charlotte Amalie",
  "VA": "Richmond",
  "WA": "Olympia",
  "WV": "Charleston",
  "WI": "Madison",
  "WY": "Cheyenne"
};

const ARRAY = [];

const NUM_ITEMS = Object.keys(ANSWERS).length;

var $content = document.getElementById('content');

function processAnswers() {
  var i = 0;
  for(var key in ANSWERS){
    ARRAY[i] = [key, ANSWERS[key]];
    i++;
  }
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i -= 1) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
  } 
  return a;
}

function getRandomIndex() {
  return Math.floor(Math.random() * NUM_ITEMS);
}

var Components = {

  Question : React.createClass({

    getInitialState : function() {
      var rand = getRandomIndex();

      return {
        index : rand,
        state : ARRAY[rand][0]
      }
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
      var otherOptions = shuffle(cleanedArray).slice(0, 3);
      var options = shuffle(correctOption.concat(otherOptions));

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
  }), 

  Timer : React.createClass({

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
  }),

  FinishScreen : React.createClass({

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
  }),

  Container : React.createClass({
    render : function() {
      return (
        <div className="Wrapper">
          <Components.Question/>
          <Components.Timer/>
          <Components.FinishScreen correct={SCORE.correct} incorrect={SCORE.incorrect}/>
        </div>
      )
    }
  })
}

processAnswers();

window.app = ReactDOM.render(
  <Components.Container/>,
  $content
);