import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm, reset, } from 'redux-form';
import { connect, } from 'react-redux';
import { TextField, } from 'redux-form-material-ui';
import { guessActs, } from '../actions';

const resetForm = formID => (action, dispatch) => dispatch(reset(formID));

const BaseGuess = ({ handleSubmit, dispatch, onSubmit, }, context) => (
  <form onSubmit={handleSubmit} >
    <Field name="guess" component="input" type="text"
      onKeyPress={({ key, }) => onSubmit(key)}/>
  </form>
  );

const ReduxGuess = reduxForm()(BaseGuess);

const GuessForm = ({ guessLetter, guessForm, formID, dispatch, }) => (
    <div className="row">
      <ReduxGuess
        form={'guessChar'} onSubmit={guessLetter}
        onSubmitSuccess={resetForm('guessChar')}
      />
    </div>
  );

export default connect(null, guessActs)(GuessForm);
