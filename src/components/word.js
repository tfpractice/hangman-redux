import React from 'react';
import { connect, } from 'react-redux';
import { Card, CardActions, CardHeader, CardMedia, CardText, CardTitle, }
from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import Form from './form';
import Letter from './letter';
import { guessActs, wordActs, } from '../actions';

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
 animal: animals.all[0],
});

const Word = ({
 guesses, word, characters, synonyms, guessLetter, animal,
remaining,
}) => (
  <div >
    <h1> GUESSES:[ {[ ...guesses, ].map(
      (c, i) => <Letter key={i} chr={c}/>)}] : {remaining} left
    </h1>
    <Divider/>
    <div><h1>A </h1></div>
    <div><h1>{characters.map((c, i) => <Letter key={i} chr={c}/>)}</h1></div>
    <div><h1> of </h1></div>
    <div><h1>{animal} </h1></div>
    <Form/>
    <div style={styles.wrapper}>{synonyms.map((s, i) =>
      <Chip key={i} style={styles.chip}>
        {s}
      </Chip>)}
  </div>
</div>
);

export default connect(mapStateToProps, { ...wordActs, ...guessActs, })(Word);
