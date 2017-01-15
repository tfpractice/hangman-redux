import React from 'react';
import { connect, } from 'react-redux';
import Letter from './letter';
import { guessActs, wordActs, } from '../actions';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';

const styles = {
  chip: { margin: 4, },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const mapStateToProps = ({ guesses, synonyms, word, remaining, animals, }, ) =>
({
 characters: (word.toUpperCase().split('')),
 synonyms,
 guesses,
 remaining,
 animals,
});

const Word = ({
 guesses, word, characters, synonyms, guessLetter,
remaining,
}) => (
  <div style={styles.wrapper}>
    <h1> GUESSES: {[ ...guesses, ].map((c, i) => <Letter key={i} chr={c}/>)}</h1>
    <h1> {remaining} REMAINING
    </h1>
    <Divider/>
    <h1>{characters.map((c, i) => <Letter key={i} chr={c}/>)}</h1>
    <input type="text" onKeyPress={({ key, }) => guessLetter(key)} />
    {synonyms.map((s, i) =>
      <Chip key={i} style={styles.chip}>
        {s}
      </Chip>)}
</div>
);

export default connect(mapStateToProps, { ...wordActs, ...guessActs, })(Word);
