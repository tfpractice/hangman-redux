import { EXAMPLES_ACTIONS, UPDATE_EXAMPLES, } from '../constants';

const update = defs => prev => defs || [];

export const updateExamples = defs =>
({ type: UPDATE_EXAMPLES, curry: update(defs), });
