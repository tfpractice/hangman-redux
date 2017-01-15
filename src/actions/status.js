import { SET_STATUS, STATUS_ACTIONS, } from '../constants';
import { resetGuesses, } from './guesses';
import { resetRem, } from './remaining';
import { resetAnimals, } from './animal';
const set = over => status => ({ over, });

export const endGame = () =>
({ type: SET_STATUS, curry: set(true), });

export const playGame = () => (dispatch) => {
  dispatch({ type: SET_STATUS, curry: set(false), });
  dispatch(resetGuesses());
  dispatch(resetRem());
  dispatch(resetAnimals());
};
export const setStatus = over =>
({ type: SET_STATUS, curry: set(over), });
