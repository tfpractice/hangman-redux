import { collections, } from 'turmeric-utils';
import { ADD_ANIMAL, ANIMAL_ACTIONS,
REMOVE_ANIMAL, RESET_ANIMALS, SET_CURRENT_ANIMAL, UPDATE_CORRECT_ANIMALS, } from '../constants';
import { ANIMALS, ANIMAP, getXRandom, } from '../utils';
const { removeSet, spread, } = collections;

import { getGifs, } from './gifs';
import { playGame, } from './status';
import { getWord, resetWord, } from './word';

const update = next => prv => ({ ...prv, correct: prv.correct.concat(next), });
const reset = all => prv => ({ ...prv, all, });
const remove = anim => state => removeSet(state)(anim);
const getName = name => ANIMAP.get(name).pop();
const firstAnimal = animals => animals.shift();

export const resetAnimals = (next = getXRandom(ANIMALS, 10)) => (dispatch) => {
  dispatch({ type: RESET_ANIMALS, curry: reset(next), });

  dispatch(getWord(getName(firstAnimal(next))));
};

export const updateCorrect = corr =>
({ type: UPDATE_CORRECT_ANIMALS, curry: update(corr), });
