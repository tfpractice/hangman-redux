import React from 'react';
import { connect, } from 'react-redux';
import { Card, CardActions, CardHeader, CardMedia, CardText, CardTitle, }
from 'material-ui/Card';
import { List, ListItem, } from 'material-ui/List';

import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import Form from './form';
import Letter from './letter';
import Grid from './grid';

import { guessActs, wordActs, } from '../actions';

const styles = {
  chip: { margin: 4, },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const mapStateToProps = ({ gifs, examples, guesses, definitions, synonyms, word, remaining, animals, }, ) =>
({
 characters: (word.toUpperCase().split('')),
 synonyms,
 examples,
 definitions,
 guesses,
 remaining,
 animal: animals.all[0],
 gifs,
});

const Word = ({
 guesses, word, characters, examples, synonyms, definitions, guessLetter, animal,
remaining, gifs,
}) => (
  <Card>
    <CardHeader
      title={ <h1>{`A _____ of ${animal}`}</h1>}
      subtitle={ <h5> GUESSES: [ {[ ...guesses, ].join(', ')} ] : {remaining} left </h5>}
        />

        <CardMedia>
          <Grid images={gifs}/>
          <h1>{characters.map((c, i) => <Letter key={i} chr={c}/>)}</h1>
        </CardMedia>
        <CardText>
          <Form/>
          <div style={styles.wrapper}>{synonyms.map((s, i) =>
            <Chip key={i} style={styles.chip}>
              {s}
            </Chip>)}
          </div>
          <List>
            {definitions.map((d, i) => <ListItem key={i} primaryText={d}/>)}
          </List>
          <List>
            {examples.map((d, i) => <ListItem key={i} primaryText={d}/>)}
          </List>

        </CardText>
      </Card>

        );

export default connect(mapStateToProps, { ...wordActs, ...guessActs, })(Word);
