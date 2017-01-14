  import React from 'react';
  import { connect, } from 'react-redux';
  import { BrowserRouter, Link, Match, Miss, } from 'react-router';
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
  import getMuiTheme from 'material-ui/styles/getMuiTheme';
  import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
  import FlatButton from 'material-ui/FlatButton';
  import AppBar from 'material-ui/AppBar';
  import Letter from './letter';
  import Word from './word';
  import Grid from './grid';
  import Paper from 'material-ui/Paper';
  import { animalActs, gifActs, reactionActs, statusActs, wordActs, } from '../actions';

  const mapStateToProps = ({ word, guesses, synonyms, animals, remaining, gifs, reactions, }) =>
({
 word, guesses, remaining, gifs, next: reactions[0], animals,
});

  { /* <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme, { userAgent: false, })}>
  <div className="App">
    <AppBar
      title={<FlatButton label={'Get Word'} secondary onClick={getRandomWord} />}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    >
      <Link to="/"><FlatButton label={'Home'} secondary /></Link>
      <Link to="/word"><FlatButton label={'Word'} secondary /></Link>
      <Link to="/topics"><FlatButton label={'Topics'} secondary /></Link>

    </AppBar>
  */ }

  const App = ({ word, guesses, resetAnimals, remaining, startGame, getRandomWord, animals, getGifs, next, gifs, }) => (
    <div>

      <Grid images={gifs}/>
      <div className="container">
        <h1> GUESSES REMAINING {remaining} </h1>
        <FlatButton label={'Get Trending Gifs'} secondary onClick={() => {
          resetAnimals(animals.slice(0));
        }} />
        <Word word={word}/>
        <h1>{[ ...guesses, ].map((c, i) => <Letter key={i} chr={c}/>)}</h1>

      </div>
    </div>

);

//         {gifs.map((g, i) => <img key={i} src={g.url}/>)}

  export default connect(mapStateToProps, { ...wordActs, ...gifActs, ...statusActs, ...animalActs, })(App);
