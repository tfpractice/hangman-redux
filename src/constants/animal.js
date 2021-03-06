export const SET_CURRENT_ANIMAL = 'SET_CURRENT_ANIMAL';
export const ADD_ANIMAL = 'ADD_ANIMAL';
export const REMOVE_ANIMAL = 'REMOVE_ANIMAL';
export const RESET_ANIMALS = 'RESET_ANIMALS';
export const UPDATE_CORRECT_ANIMALS = 'UPDATE_CORRECT_ANIMALS';
export const UPDATE_PASSED_ANIMALS = 'UPDATE_PASSED_ANIMALS';
export const ANIMAL_ACTIONS = new Set([ SET_CURRENT_ANIMAL, ADD_ANIMAL, REMOVE_ANIMAL,
  RESET_ANIMALS, ]);
export const CORRECT_ANIMAL_ACTIONS = new Set([ UPDATE_CORRECT_ANIMALS, ]);
export const PASSED_ANIMAL_ACTIONS = new Set([ UPDATE_PASSED_ANIMALS, ]);
