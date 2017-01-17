import axios from 'axios';
import { singular, } from 'pluralize';
import { ANIMALS, ANIMAP, MASHAPE_KEY, RANDOM_WORD_URL, WORD_SEARCH_URL, WORDS_API_URL, }
 from '../utils';
import { HEADERS as headers, } from '../utils';
import { GUESS_WORD, RESET_WORD, WORD_ACTIONS, } from '../constants';
import { updateSynonyms, } from './synonyms';
import { updateDefinitions, } from './definitions';
import { updateExamples, } from './example';
import { resetGuesses, } from './guesses';
import { resetRem, } from './remaining';
import { getGifs, } from './gifs';
const reset = word => prev => word.toUpperCase();
const getData = ({ data, }) => data;

export const resetWord = wrd => (dispatch) => {
  dispatch({ type: RESET_WORD, curry: reset(wrd), });
  dispatch(resetGuesses());
  dispatch(resetRem(10));
};

const defRet = ({ word: '', frequency: { zipf: 0, }, });
const remove = [];
const flatten = (a = [], b = []) => [ ...a, ...b, ];

const hasSynonyms = r => r.synonyms;
const tapSyn = ({ synonyms = [], }) => synonyms;
const hasDefs = r => r.definition;
const tapDef = ({ definition = '', }) => definition;
const hasExps = r => r.examples;
const tapExp = ({ examples = '', }) => examples;
const replace = regex => str => str.replace(new RegExp(regex), ' ____ ');

export const getWord = wrd => dispatch =>
  axios.get(`${WORDS_API_URL}/${wrd}`, { headers, })
    .then(({ data: { word, results, }, }) => {
      const syns = results.map(tapSyn).reduce(flatten, []);
      const defs = results.map(tapDef);
      const exs = results.map(tapExp)
      .reduce(flatten, [])
      .map(replace(`${word}`));

      console.log('results', results, exs);
      dispatch(resetWord(word));
      dispatch(updateDefinitions(defs));
      dispatch(updateSynonyms(syns));
      dispatch(getGifs(wrd));
      dispatch(updateExamples(exs));

      return word;
    })
    .catch(console.error);

export const getRandomWord = wrd => dispatch =>
    axios.get(`${WORDS_API_URL}/${wrd}`, { headers, })
      .then(({ data: { word, results, }, }) => {
        console.log('random results', word, results);

        return word;
      }).then(resetWord).then(dispatch)
      .catch(console.error);

export const getFrequency = wrd =>
      axios.get(`${WORDS_API_URL}/${wrd}/frequency`, { headers, })
        .then(getData)
        .then(({ word, frequency, } = defRet) =>
        new Map().set(word, frequency.zipf + 0))
        .catch((e) => {
          console.error(e, remove.push(wrd));
          console.log('remove', remove);
          return new Map().set(wrd, 0);
        });

export const getSynonyms = word => dispatch =>
  axios.get(`${WORDS_API_URL}/${word}`, { headers, }).then(({ data, }) => { console.log(data); return [ 'love', ]; })
    .then(updateSynonyms).then(dispatch).catch(console.error);
