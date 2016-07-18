import React, { Component } from 'react';
import classnames from 'classnames';

import { ARRAY } from 'app/utils/constants.js';
import { getRandomIndex } from 'app/utils/functions';
import Option from 'app/components/Option';

import styles from './styles.scss';

export default class Question extends Component {

  constructor(props) {
    super(props);

    let rand = getRandomIndex();

    this.state = {
      index : rand,
      state : ARRAY[rand][0]
    };
  }

  shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
  }

  onUpdate(context) {

    var rand = Math.floor(Math.random() * ARRAY.length);

    context.setState({
      index: rand,
      state : ARRAY[rand][0]
    });
  }

  render() {

    let correctOption = [ARRAY[this.state.index]];
    let cleanedArray = ARRAY.slice();
    cleanedArray.splice(this.state.index, 1);
    let otherOptions = this.shuffle(cleanedArray).slice(0, 3);
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
