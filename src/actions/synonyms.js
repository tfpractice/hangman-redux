import { SYNONYMS_ACTIONS, UPDATE_SYNONYMS, } from '../constants';
const singleWord = str => str.split(/[^a-z+]+/).length === 1;
const update = syns => prev => syns.filter(singleWord) || [];

export const updateSynonyms = syns =>
({ type: UPDATE_SYNONYMS, curry: update(syns), });
