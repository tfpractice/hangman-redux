import { combineReducers, } from 'redux';
import { ANIMAL_ACTIONS, CORRECT_ANIMAL_ACTIONS,
PASSED_ANIMAL_ACTIONS, } from '../constants';
import { ANIMALS, ANIMAP, getXRandom, } from '../utils';

export const all = (state = getXRandom(ANIMALS, 10), { type, curry, }) =>
ANIMAL_ACTIONS.has(type) ? curry(state) : state;

const correct = (state = [], { type, curry, }) =>
CORRECT_ANIMAL_ACTIONS.has(type) ? curry(state) : state;

const passed = (state = [], { type, curry, }) =>
PASSED_ANIMAL_ACTIONS.has(type) ? curry(state) : state;

export default combineReducers({ all, correct, passed, });

// const correct = (state = [], { type, curry, }) =>
// CORRECT_ANIMAL_ACTIONS.has(type) ? curry(state) : state;
