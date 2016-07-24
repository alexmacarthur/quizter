import { ARRAY } from './constants';

export function getRandomIndex () {
	return Math.floor(Math.random() * ARRAY.length);
}

export function hasClass(element, myClass) {
    return (' ' + element.className + ' ').indexOf(' ' + myClass + ' ') > -1;
}