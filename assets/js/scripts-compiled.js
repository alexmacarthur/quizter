"use strict";

var $content = document.getElementById('content');

var SCORE = {
  correct: 0,
  incorrect: 0
};

var ANSWERS = {
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

var ARRAY = [];

var NUM_ITEMS = Object.keys(ANSWERS).length;

function processAnswers() {
  var i = 0;
  for (var key in ANSWERS) {
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

  Question: React.createClass({
    displayName: "Question",


    getInitialState: function getInitialState() {
      var rand = getRandomIndex();

      return {
        index: rand,
        state: ARRAY[rand][0]
      };
    },

    handleClick: function handleClick(e) {
      if (e.target.getAttribute('data-state') === this.state.state) {
        SCORE.correct++;

        window.updateTimer();
      } else {
        SCORE.incorrect++;
      }

      // show the score
      console.log(SCORE);

      // update component with new question
      var rand = Math.floor(Math.random() * NUM_ITEMS);
      this.setState({
        index: rand,
        state: ARRAY[rand][0]
      });
    },

    render: function render() {

      var correctOption = [ARRAY[this.state.index]];
      var cleanedArray = ARRAY.slice();
      cleanedArray.splice(this.state.index, 1);
      var otherOptions = shuffle(cleanedArray).slice(0, 3);
      var options = shuffle(correctOption.concat(otherOptions));

      return React.createElement(
        "div",
        { className: "Question" },
        this.state.state,
        React.createElement(
          "ul",
          { className: "List" },
          options.map(function (item) {
            return React.createElement(
              "li",
              { "data-state": item[0], onClick: this.handleClick, key: item[1] },
              item[1]
            );
          }.bind(this))
        )
      );
    }
  }),

  Timer: React.createClass({
    displayName: "Timer",


    getInitialState: function getInitialState() {
      return {
        count: 30000,
        interval: setInterval(this.countdown, 1000)
      };
    },

    componentWillMount: function componentWillMount() {
      var _this = this;

      window.updateTimer = function (time) {
        var newTime = _this.state.count + 5000;
        _this.setState({
          count: newTime });
      };
    },

    countdown: function countdown() {
      this.setState({ count: this.state.count - 1000 });

      if (this.state.count <= 0) {
        clearInterval(this.state.interval);
        return;
      }
    },

    render: function render() {
      return React.createElement(
        "div",
        { className: "Countdown" },
        React.createElement(
          "span",
          null,
          "Time Remaining: "
        ),
        React.createElement(
          "span",
          { id: "seconds" },
          this.state.count / 1000
        )
      );
    }
  }),

  Container: React.createClass({
    displayName: "Container",

    render: function render() {
      return React.createElement(
        "div",
        { className: "Wrapper" },
        React.createElement(Components.Question, null),
        React.createElement(Components.Timer, null)
      );
    }
  })
};

processAnswers();

window.app = ReactDOM.render(React.createElement(Components.Container, null), $content);
