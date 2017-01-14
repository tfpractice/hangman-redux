import React from 'react';
import { connect, } from 'react-redux';
import Letter from './letter';
import { guessActs, wordActs, } from '../actions';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
const styles = {
  chip: { margin: 4, },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const unknowns = word => guesses =>
new Set(word.split('').filter(c => !guesses.has(c.toUpperCase())));

const mapStateToProps = ({ guesses, synonyms, word, }, ) =>
({ characters: (word.toUpperCase().split('')), synonyms, });

const Word = ({ guesses, word, characters, resetWord, synonyms, guessLetter, }) => (
  <div style={styles.wrapper}>
    <h1>{characters.map((c, i) => <Letter key={i} chr={c}/>)}</h1>
    <input type="text" onKeyPress={({ key, }) => guessLetter(key)} />

    {synonyms.map((s, i) => <Chip key={i} style={styles.chip}>
      {s}
    </Chip>)}

</div>
);

export default connect(mapStateToProps, { ...wordActs, ...guessActs, })(Word);
