import React, { Component } from 'react';
import classnames from 'classnames';

import { ARRAY } from 'app/utils/constants.js';
import { getRandomIndex } from 'app/utils/functions';
import Option from 'app/components/Option';

import styles from '../scss/styles.scss';

export default class Question extends Component {

  constructor(props) {
    super(props);

    let rand = getRandomIndex();

    console.log(ARRAY[rand][0]);

    this.state = {
      index : rand,
      state : ARRAY[rand][0]
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

  onUpdate(context) {

    let rand = getRandomIndex();

    context.setState({
      index: rand,
      state : ARRAY[rand][0]
    });
  }

  render() {

    // grab the correct option to the state, to make sure it's in the list
    let correctOption = [ARRAY[this.state.index]];

    // make a copy of the array so we can do stuff to it
    let cleanedArray = ARRAY.slice();

    // remove the correct option as a possible other option 
    cleanedArray.splice(this.state.index, 1);

    // set the other options by shuffling our array copy and getting three options
    let otherOptions = this.shuffle(cleanedArray).slice(0, 3);

    // add the correct option we saved earlier to the list to get our final set of options
    let options = this.shuffle(correctOption.concat(otherOptions));

    return (
      <div className={classnames(styles.Question, this.props.className)}>
        <h2>{this.state.state}</h2>
        <ul>
          {options.map(function(item) {
            return <Option thisThing={this} onUpdate={this.onUpdate} questionState={this.state.state} optionState={item[0]} key={item[1]}>{item[1]}</Option>;
          }.bind(this))}
        </ul>
      </div>
    );
  }
}
