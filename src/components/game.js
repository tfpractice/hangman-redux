import React from 'react';
import { connect, } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Word from './word';
import Grid from './grid';
import { animalActs, gifActs, statusActs, wordActs, } from '../actions';
import { ANIMAP, } from '../utils';
import Stats from './stats';
const mapStateToProps = ({ word, guesses, synonyms, animals: { all, correct, }, remaining, gifs, }) =>
({ word, correct, gifs, animal: all[0], });
const Game = ({ word, gifs, animal, correct, }) => (
  <div>
    <Word word={word}/>
    <Stats/>
    {correct.map((c, i) => <h1 key={i}>A {ANIMAP.get(c).join(', ')} of {c}</h1>)}
  </div>
);

export default connect(mapStateToProps, { ...wordActs, ...gifActs, ...statusActs, ...animalActs, })(Game);
