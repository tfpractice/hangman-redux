import axios from 'axios';

// import 'isomorphic-fetch';
import { REACTION_ACTIONS, UPDATE_REACTIONS, } from '../constants';
import { GIPHY_CATEGORIES_URL, HEADERS as headers, } from '../utils';
const update = syns => prev => syns || [ 'eye roll', 'facepalm', 'happy', 'high five', 'no', 'sad', 'kiss', 'lol', 'shrug', 'thumbs up', 'wink', ];

export const updateReactions = syns =>
({ type: UPDATE_REACTIONS, curry: update(syns), });

export const getReactions = () => console.log('getReactions', getReactions);
