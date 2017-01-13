import axios from 'axios';

// import { singular, } from 'pluralize';
import { ANIMALS, ANIMAP, MASHAPE_KEY, RANDOM_WORD_URL, WORD_SEARCH_URL, WORDS_API_URL, }
 from '../utils';
import { HEADERS as headers, } from '../utils';
import { GUESS_WORD, RESET_WORD, WORD_ACTIONS, } from '../constants';
import { updateSynonyms, } from './synonyms';
const reset = word => prev => word.toUpperCase();
const getData = ({ data, }) => data;

export const resetWord = wrd =>
 ({ type: RESET_WORD, curry: reset(wrd), });
export const animFQ = new Map();

const defRet = ({ word: '', frequency: { zipf: 0, }, });

export const getFrequency = wrd =>
axios.get(`${WORDS_API_URL}/${wrd}/frequency`, { headers, })
  .then(getData)
  .then(({ word, frequency: { zipf, }, } = defRet) => new Map().set(word, zipf))
  .catch(e => console.error(wrd, e));

export const defFQ = [ '', 0, ];
export const compareFQ = ([ k0, v0, ] = defFQ, [ k1, v1, ] = defFQ) => v0 - v1;
export const animalFreq = () => {
  console.log('ANIMAP', ANIMAP);
  Promise.resolve(ANIMALS.map(getFrequency))
    .then(console.log)
    .catch(console.error);
};

// export const sortFQ = fmap => [ ...fmap, ].sort(compareFQ);
// export const orderFQ = sortFQ(animalFreq);

// console.log('orderFQ', orderFQ);
export const getRandomWord = reaction => (dispatch) => {
  console.log('reaction', reaction);
  return axios.get(`${WORDS_API_URL}/${reaction}`, {
    headers,
  // params: {
  //   random: true,
  //   lettersMax: 8,
  //   partOfSpeech: 'verb',
  //   letterpattern: '[a-zA-Z]+',
  //   frequencyMin: 4,
  //   frequencyMax: 6,
  //   hasDetails: 'typeOf,hasCategories',
  // },
  }).then(({ data: { word, results, }, }) => {
    console.log('random results', word);

    // dispatch(updateSynonyms(data.results[0].synonyms));

    return word;
  }).then(resetWord).then(dispatch)
    .catch(console.error);
};

export const getSynonyms = word => dispatch =>
  axios.get(`${WORDS_API_URL}/${word}`, { headers, }).then(({ data, }) => { console.log(data); return [ 'love', ]; })
    .then(updateSynonyms).then(dispatch).catch(console.error);
