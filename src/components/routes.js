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
import About from './about';
import Grid from './grid';
import Stats from './stats';
import { animalActs, gifActs, statusActs, wordActs, } from '../actions';
import Game from './game';

const mapStateToProps = ({ status, word, guesses, synonyms, animals, remaining, gifs, }) =>
({
word, guesses, remaining, gifs, animals, status,
});

const NoMatch = ({ location, }) => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {location.pathname} didn’t match any pages</p>
  </div>
);

const Routes = ({ status: { over, }, playGame, }) => (
<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme, { userAgent: false, })}>

  <BrowserRouter>
    <div className="Game">
      <AppBar
        title={'Animals'}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      >
        <Link to="/"><FlatButton label={'Home'} secondary /></Link>
        <Link to="/play"><FlatButton label={'Play'} secondary onClick={playGame} /></Link>
        <Link to="/about"><FlatButton label={'About'} secondary /></Link>
      </AppBar>
      <div className="container">

        <Match exactly pattern="/" component={About} />
        <Match pattern="/play" render={props =>
          !over ? <Game/> : <Stats/>}/>
        <Match pattern="/about" component={About} />
        <Match pattern="/word" component={Word} />
        <Miss component={NoMatch}/>
      </div>

    </div>
  </BrowserRouter>
</MuiThemeProvider>

);

export default connect(mapStateToProps, statusActs)(Routes);
