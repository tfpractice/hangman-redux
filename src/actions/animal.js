import { collections, } from 'turmeric-utils';
import { ADD_ANIMAL, ANIMAL_ACTIONS,
REMOVE_ANIMAL, RESET_ANIMALS, SET_CURRENT_ANIMAL, UPDATE_CORRECT_ANIMALS, } from '../constants';
import { ANIMALS, ANIMAP, getXRandom, } from '../utils';
const { removeSet, spread, } = collections;

import { getGifs, } from './gifs';
import { playGame, } from './status';
import { getWord, resetWord, } from './word';

const update = next => prv => prv.concat(next);
const reset = all => prv => all;
const getName = name => ANIMAP.get(name)[0];
const firstAnimal = animals => animals[0];

export const resetAnimals = (next = getXRandom(ANIMALS, 10)) => (dispatch) => {
  dispatch({ type: RESET_ANIMALS, curry: reset(next), });
  dispatch(getWord(getName(firstAnimal(next))));
};

export const updateCorrect = corr => (dispatch, getState) =>
Promise.resolve(
  dispatch({ type: UPDATE_CORRECT_ANIMALS, curry: update(corr), }))
  .then(x => dispatch(resetAnimals(getState().animals.all.slice(1))))
  .catch(console.error);
