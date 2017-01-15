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
import { animalActs, gifActs, statusActs, wordActs, } from '../actions';
import Main from './main';

const mapStateToProps = ({ word, guesses, synonyms, animals, remaining, gifs, }) =>
({
word, guesses, remaining, gifs, animals,
});

const NoMatch = ({ location, }) => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {location.pathname} didn’t match any pages</p>
  </div>
);

const Topics = ({ pathname, pattern, }) => (

  <div>
    <h2>Topics</h2>
    <ul>
      {}
      <li><Link to={`${pathname}/rendering`}>Rendering with React</Link></li>
      <li><Link to={`${pathname}/components`}>Components</Link></li>
      <li><Link to={`${pathname}/props-v-state`}>Props v. State</Link></li>
    </ul>
    <Match pattern={`${pathname}/:topicId`} component={Topic}/>
    <Match pattern={pathname} exactly render={() => (
      <h3>Please select a topic</h3>
    )}/>
  </div>
);

const Topic = ({ params, }) => (

  <div>
    <h3>{params.topicId}</h3>
  </div>
);

const Routes = () => (
<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme, { userAgent: false, })}>

  <BrowserRouter>
    <div className="Main">
      <AppBar
        title={'Animals'}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      >
        <Link to="/"><FlatButton label={'Home'} secondary /></Link>
        <Link to="/word"><FlatButton label={'Word'} secondary /></Link>
        <Link to="/about"><FlatButton label={'About'} secondary /></Link>
        <Link to="/topics"><FlatButton label={'Topics'} secondary /></Link>
      </AppBar>
      <Match pattern="/" component={Main} />
      <Match pattern="/about" component={About} />
      <Match pattern="/word" component={Word} />
      <Match pattern="/topics" component={Topics} />
      <Miss component={NoMatch}/>
    </div>
  </BrowserRouter>
</MuiThemeProvider>

);

export default connect(mapStateToProps)(Routes);
