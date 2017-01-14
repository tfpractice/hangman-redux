import axios from 'axios';

import { HEADERS as headers, RANDOM_WORD_URL, WORD_SEARCH_URL, WORDS_API_URL, }
 from './keys';

const getData = ({ data, }) => data;

export const animFQ = new Map();

const defRet = ({ word: '', frequency: { zipf: 0, }, });
const remove = [];

export const getFrequency = wrd =>
axios.get(`${WORDS_API_URL}/${wrd}/frequency`, { headers, })
  .then(getData)
  .then(({ word, frequency, } = defRet) =>
  new Map().set(wrd, frequency.zipf + 0))
  .catch((e, ...args) => {
    remove.push(wrd);

    return new Map().set(wrd, 0);
  });

export const defFQ = [ '', 0, ];
export const compareFQ = ([ k0, v0, ] = defFQ, [ k1, v1, ] = defFQ) => v0 - v1;
export const compareFQMaps = (m1, m2) => compareFQ([ ...m1, ], [ ...m2, ]);
export const sortFQ = fmap => fmap.sort(compareFQ);
export const sortFQMaps = fmaps => [ ...fmaps, ].sort(compareFQMaps);
export const first = ([ el, ...rest ]) => el;
export const freqMap = (...terms) => axios.all(terms.map(getFrequency))
  .then((v) => { console.log('v', sortFQ(v)); return v; })
  .catch(e => console.log('error in freq', e));
