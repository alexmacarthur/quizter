import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import {ARRAY, SHOWNQUESTIONS} from 'app/utils/constants.js';
import {getRandomIndex, hasClass} from 'app/utils/functions';
import Option from 'app/components/Option';

import styles from '../scss/styles.scss';

export default class Question extends Component {

    constructor(props) {
        super(props);

        this.state = {
            state: null,
            options: {}
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

        let rand = getRandomIndex();

        if (SHOWNQUESTIONS.length < ARRAY.length) {

            while (SHOWNQUESTIONS.indexOf(ARRAY[rand][0]) > -1) {
                rand = getRandomIndex();
            }

            // Grab the correct option to the state, to make sure it's in the list.
            let correctOption = [ARRAY[rand]];

            // Make a copy of the array so we can do stuff to it.
            let cleanedArray = ARRAY.slice();

            // Remove the correct option as a possible other option.
            cleanedArray.splice(rand, 1);

            // Set the other options by shuffling our array copy and getting three options.
            let otherOptions = this.shuffle(cleanedArray).slice(0, 3);

            // Add the correct option we saved earlier to the list to get our final set of options.
            let options = this.shuffle(correctOption.concat(otherOptions));

            this.setState({state: ARRAY[rand][0], city: ARRAY[rand][1], options: options});
        } else {
            window.showFinishScreen();
        }
    }

    onOptionClick(context) {
        context.generateOptions();
    }

    componentWillMount() {
        this.generateOptions();
    }

    render() {
        return (
            <div className={classnames(styles.Question, this.props.className)}>
                <h2>{this.state.state}</h2>
                <ul>
                    {this.state.options.map(function(item) {
                        return <Option thisThing={this} onOptionClick={this.onOptionClick} questionValue={this.state.state} optionValue={item[0]} optionCorrectAnswer={this.state.city} key={item[1]}>{item[1]}</Option>;
                    }.bind(this))}
                </ul>
            </div>
        );
    }
}
