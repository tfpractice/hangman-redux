import { combineReducers, } from 'redux';
import { reducer as forms, } from 'redux-form';
import guesses from './guesses';
import remaining from './remaining';
import status from './status';
import word from './word';
import synonyms from './synonyms';
import gifs from './gifs';
import reactions from './reactions';
import examples from './example';
import animals from './animals';
import definitions from './definitions';

export default combineReducers({
animals, definitions, word, examples, guesses, remaining, status, gifs, synonyms, forms,
});
