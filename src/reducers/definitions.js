import { DEFINITIONS_ACTIONS, } from '../constants';

export default (state = [], { type, curry, }) =>
  DEFINITIONS_ACTIONS.has(type) ? curry(state) : state;
