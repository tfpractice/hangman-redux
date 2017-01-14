import { ANIMAL_ACTIONS, } from '../constants';
import { ANIMALS, ANIMAP, } from '../utils';

export default (state = ANIMALS.slice(0, 10), { type, curry, }) =>
ANIMAL_ACTIONS.has(type) ? curry(state) : state;
