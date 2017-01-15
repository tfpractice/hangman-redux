  import React from 'react';
  import { connect, } from 'react-redux';
  import FlatButton from 'material-ui/FlatButton';
  import Word from './word';
  import Grid from './grid';
  import Paper from 'material-ui/Paper';
  import { animalActs, gifActs, statusActs, wordActs, } from '../actions';
  const mapStateToProps = ({ word, guesses, synonyms, animals, remaining, gifs, }) =>
({
 word, guesses, remaining, gifs, animals, animal: animals[0],
});
  const App = ({ word, guesses, resetAnimals, animal, remaining, startGame, getRandomWord, animals, getGifs, gifs, }) => (
    <div>
      <Grid images={gifs}/>
      <div className="container">
        <FlatButton label={'Get Trending Gifs'} secondary onClick={() => {
          resetAnimals(animals.slice(1));
        }} />
        <h1>{animals[0]}</h1>
        <Word word={word}/>
      </div>
    </div>
);

  export default connect(mapStateToProps, { ...wordActs, ...gifActs, ...statusActs, ...animalActs, })(App);
