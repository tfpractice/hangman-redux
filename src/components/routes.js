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
import { animalActs, gifActs, reactionActs, statusActs, wordActs, } from '../actions';
import App from './main';
const mapStateToProps = ({ word, guesses, synonyms, animals, remaining, gifs, reactions, }) =>
({
word, guesses, remaining, gifs, next: reactions[0], animals,
});

const NoMatch = ({ location, }) => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {location.pathname} didn’t match any pages</p>
  </div>
);
const About = () => (
  <div>
    <h2>About</h2>
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

    {}
    <Match pattern={`${pathname}/:topicId`} component={Topic}/>

    {}
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
    <div className="App">
      <AppBar
        title={'Animals'}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      >
        <Link to="/"><FlatButton label={'Home'} secondary /></Link>
        <Link to="/word"><FlatButton label={'Word'} secondary /></Link>
        <Link to="/topics"><FlatButton label={'Topics'} secondary /></Link>
      </AppBar>
      <Match pattern="/" component={App} />
      <Match pattern="/about" component={Word} />
      <Match pattern="/topics" component={Topics} />
      <Miss component={NoMatch}/>
    </div>
  </BrowserRouter>
</MuiThemeProvider>

);

export default connect(mapStateToProps)(Routes);
