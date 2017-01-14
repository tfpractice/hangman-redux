import { collections, } from 'turmeric-utils';
import { ADD_ANIMAL, ANIMAL_ACTIONS,
REMOVE_ANIMAL,
RESET_ANIMALS,
SET_CURRENT_ANIMAL, } from '../constants';
import { ANIMALS, ANIMAP, } from '../utils';
const { removeSet, spread, } = collections;

import { getGifs, } from './gifs';

import { playGame, } from './status';
import { getWord, resetWord, } from './word';

const reset = anims => prv => anims;
const remove = anim => state => removeSet(state)(anim);
const getName = name => ANIMAP.get(name).pop();
const firstAnimal = animals => animals.pop();

export const resetAnimals = next => (dispatch) => {
  dispatch({ type: RESET_ANIMALS, curry: reset(next), });
  dispatch(getWord(getName(firstAnimal(next))));

  // dispatch(resetWord(ANIMAP.get(next[0]).pop()));
};
