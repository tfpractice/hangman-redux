import { ANIMAL_ACTIONS, } from '../constants';
import { ANIMALS, ANIMAP, getXRandom, } from '../utils';

export default (state = getXRandom(ANIMALS, 10), { type, curry, }) =>
ANIMAL_ACTIONS.has(type) ? curry(state) : state;
