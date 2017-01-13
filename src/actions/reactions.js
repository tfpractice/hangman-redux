import axios from 'axios';

// import 'isomorphic-fetch';
import { REACTION_ACTIONS, UPDATE_REACTIONS, } from '../constants';
import { animals, GIPHY_CATEGORIES_URL, HEADERS as headers, names, splitNames, } from '../utils';
const update = syns => prev => syns || [ 'eye roll', 'facepalm', 'happy', 'high five', 'no', 'sad', 'kiss', 'lol', 'shrug', 'thumbs up', 'wink', ];

export const updateReactions = syns =>
({ type: UPDATE_REACTIONS, curry: update(syns), });
const aMap = new Map(animals.entries());

// const narr = names.map(s=> );

export const getReactions = () => console.log('getReactions', aMap);
