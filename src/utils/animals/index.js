export * from './data';
import { collections, } from 'turmeric-utils';
const { removeSet, diff, } = collections;

import { ANIMARR, missingGroups, } from './data';
import { first, freqMap, sortFQ, } from '../words';

export const hasFreq = xSet => str => !xSet.has(str);

const normalize = s => s.trim().toLowerCase();
const split = delim => str => normalize(str).split(delim).map(normalize);
const normalizePair = ([ k, v, ]) =>
[ normalize(k), ...v.map(normalize).map(split(',')), ];

export const ANIMAP = new Map(ANIMARR.map(normalizePair));
export const ANIMALS = [ ...ANIMAP.keys(), ];

export const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

export const ranimals = (coll, count) => {
  let results = [];

  while (results.length < count) {
    results = results.concat(getRandom(diff(coll)(results)));
  }
  return results;
};

console.log('ranimals', ranimals(ANIMALS, 10));
console.log('ranimals', ranimals(ANIMALS, 10));
console.log('ranimals', ranimals(ANIMALS, 10));

export const NAMES = [ ...ANIMAP.values(), ];
export const ALL_NAMES = NAMES.reduce((a = [], c) => a.concat(c), [])
.filter(hasFreq(new Set(missingGroups)));

const getMaxGroup = (animal) => {
  freqMap(...ANIMAP.get(animal).filter(hasFreq(new Set(missingGroups))))
    .then(sortFQ)
    .then((c) => { console.log('c', c); return c; })
    .then(first)
    .then(f => new Map().set(animal, f))
    .catch(console.error);
};

export const sortedMap = anims => Promise.all(anims.map(getMaxGroup));
