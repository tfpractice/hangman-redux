import React from 'react';
import { connect, } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Word from './word';
import Grid from './grid';
import Paper from 'material-ui/Paper';
import { animalActs, gifActs, statusActs, wordActs, } from '../actions';

const mapStateToProps = ({ word, guesses, synonyms, animals, remaining, gifs, }) =>
({ word, animals, gifs, animal: animals[0], });
const Game = ({ word, gifs, resetAnimals, animal, animals, }) => (
  <div>
    <Grid images={gifs}/>
    <FlatButton label={'Get Trending Gifs'} secondary onClick={() => {
      resetAnimals(animals.slice(1));
    }} />
    <h1>{animal}</h1>
    <Word word={word}/>
  </div>
);

export default connect(mapStateToProps, { ...wordActs, ...gifActs, ...statusActs, ...animalActs, })(Game);
