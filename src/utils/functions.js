import { ARRAY } from './constants';

export function getRandomIndex () {
	return Math.floor(Math.random() * ARRAY.length);
}
