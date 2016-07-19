import { NUM_ITEMS } from './constants';

export function getRandomIndex () {
	return Math.floor(Math.random() * NUM_ITEMS);
}
