import { DEFINITIONS_ACTIONS, UPDATE_DEFINITIONS, } from '../constants';

const update = defs => prev => defs || [];

export const updateDefinitions = defs =>
({ type: UPDATE_DEFINITIONS, curry: update(defs), });
