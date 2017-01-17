import { EXAMPLES_ACTIONS, } from '../constants';

export default (state = [], { type, curry, }) =>
  EXAMPLES_ACTIONS.has(type) ? curry(state) : state;
