import { CORRECT_GUESS, GUESS_ACTIONS, GUESS_LETTER, INCORRECT_GUESS, REPEAT_GUESS,
RESET_GUESSES, } from '../constants';
import { decrementRem, } from './remaining';
import { updateCorrect, } from './animal';

const add = str => ltrs => new Set(ltrs).add(str.toUpperCase());
const reset = str => ltrs => new Set();
const unknowns = getState => new Set(
  (getState().word.toUpperCase().split(''))
    .filter(c => !getState().guesses.has(c.toUpperCase())));

const correctGuess = guess => getState =>
unknowns(getState).has(guess.toUpperCase()) ||
  getState().guesses.has(guess.toUpperCase());

const newGuess = guess => (unk) => {
  console.log('unk', unk);
  return unk.has(guess.toUpperCase());
};

export const resetGuesses = () =>
  ({ type: RESET_GUESSES, curry: reset(), });

const allGuessed = getState => unknowns(getState).size === 0;

export const guessLetter = str => (dispatch, getState) => {
  if (correctGuess(str)(getState)) {
    dispatch({ type: GUESS_LETTER, curry: add(str), });
    if (allGuessed(getState)) {
      dispatch(updateCorrect(getState().animals.all[0]));
    }
  } else {
    dispatch({ type: GUESS_LETTER, curry: add(str), });

    dispatch(decrementRem());
  }
};

export const guessForm = ({ guess, }) => {
  console.log('guess', guess);
  guessLetter(guess);
};
