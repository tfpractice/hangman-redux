//
// import React from 'react';
// import { render, } from 'react-dom';
//
// // 1. import a few components
// import { BrowserRouter, Link, Match, Miss, } from 'react-router';

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

  // 5. Components rendered by a `Match` get some routing-specific
  //    props, like the portion of the parent `pattern` that was
  //    matched against the current `location.pathname`, in this case
  //    `/topics`
  <div>
    <h2>Topics</h2>
    <ul>
      {/* 6. Use the parent's matched pathname to link relatively */}
      <li><Link to={`${pathname}/rendering`}>Rendering with React</Link></li>
      <li><Link to={`${pathname}/components`}>Components</Link></li>
      <li><Link to={`${pathname}/props-v-state`}>Props v. State</Link></li>
    </ul>

    {/* 7. Render more `Match` components to get nesting naturally
           within the render lifecycle. Use the parent's matched
           pathname to nest the url.
    */}
    <Match pattern={`${pathname}/:topicId`} component={Topic}/>

    {/* 8. use the `render` prop for convenient inline rendering */}
    <Match pattern={pathname} exactly render={() => (
      <h3>Please select a topic</h3>
    )}/>
  </div>
);

const Topic = ({ params, }) => (

  // 9. the dynamic segments of a `pattern` (in this case `:topicId`)
  //    are parsed and sent to the component from `Match`.
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

      {/* 4. Render some `<Match/>` components.
        When the current location matches the `pattern`
        then the `component` will render.
      */}
      <Match pattern="/" component={App} />
      <Match pattern="/about" component={Word} />
      <Match pattern="/topics" component={Topics} />
      {/* If none of those match, then a sibling `Miss` will render. */}
      <Miss component={NoMatch}/>
    </div>
  </BrowserRouter>

</MuiThemeProvider>

);

//         {gifs.map((g, i) => <img key={i} src={g.url}/>)}

// export default connect(mapStateToProps, { ...wordActs, ...gifActs, ...statusActs, ...animalActs, })(App);
export default connect(mapStateToProps)(Routes);
