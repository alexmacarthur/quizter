import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import { ARRAY } from 'app/utils/constants.js';
import { getRandomIndex , hasClass } from 'app/utils/functions';
import Option from 'app/components/Option';

import styles from '../scss/styles.scss';

export default class Question extends Component {

  constructor(props) {
    super(props);

    this.state = {
      state : null,
      options : {},
      slideOffScreen : false,
      setNewPosition : false,
      hasClassOfNext : false
    };
  }

  shuffle(a) {
    for (let i = a.length; i; i -= 1) {
        let j = Math.floor(Math.random() * i);
        let x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
  }

  generateOptions() {

    // set the state
    let rand = getRandomIndex();

    this.setState({
      state : ARRAY[rand][0]
    })

    // grab the correct option to the state, to make sure it's in the list
    let correctOption = [ARRAY[rand]];

    // make a copy of the array so we can do stuff to it
    let cleanedArray = ARRAY.slice();

    // remove the correct option as a possible other option
    cleanedArray.splice(rand, 1);

    // set the other options by shuffling our array copy and getting three options
    let otherOptions = this.shuffle(cleanedArray).slice(0, 3);

    // add the correct option we saved earlier to the list to get our final set of options
    let options = this.shuffle(correctOption.concat(otherOptions));

    this.setState({
      options : options
    });
  }

  onUpdate(context) {

    // First, slide the old question off the screen, triggered by state update
    context.setState({
      slideOffScreen : true
    });

    context.setState({
      hasClassOfNext : hasClass(ReactDOM.findDOMNode(context), styles.Next)
    });

    // Next, update state to set question on other side of screen (to give appearance of new question sliding in)
    setTimeout(() => {
      context.generateOptions();

      context.setState({
        slideOffScreen : false,
        setNewPosition : true
      });

    }, 250);

  }

  componentWillMount() {
    this.generateOptions();
  }

  render() {
    
    let componentClass = classnames(
      styles.Question,
      {
        [`${styles.slideOffScreen}`] : this.state.slideOffScreen,
        [`${styles.setNewPosition}`] : this.state.setNewPosition,
        [`${styles.Next}`] : this.hasClassOfNext || window.INITIAL_QUESTION_BEING_RENDERED
      });

    window.INITIAL_QUESTION_BEING_RENDERED = false;

    return (
      <div className={classnames(componentClass, this.props.className)}>
        <h2>{this.state.state}</h2>
        <ul>
          {this.state.options.map(function(item) {
            return <Option thisThing={this} onUpdate={this.onUpdate} questionState={this.state.state} optionState={item[0]} key={item[1]}>{item[1]}</Option>;
          }.bind(this))}
        </ul>
      </div>
    );
  }
}
