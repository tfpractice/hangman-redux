import React from 'react';
import { connect, } from 'react-redux';
import { ANIMAP, } from '../utils';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem, } from 'material-ui/List';
import { statusActs, } from '../actions';

const mapStateToProps = ({ word, status: { over, }, animals: { correct, all, }, }) =>
({ word, correct, all, open: over, });

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */

export class StatsDialog extends React.Component {
  state = { open: true, };

  handleOpen = () => {
    this.setState({ open: true, });
  };

  handleClose = () => {
    this.setState({ open: false, });
  };

  render() {
    const { word, correct, all, status, playGame, } = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Start New Game"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => { playGame(); this.handleClose(); }}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog" onTouchTap={playGame} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <List>
            {correct.map((d, i) => <ListItem key={i} primaryText={<h5>{d}</h5>}/>)}
          </List>
        </Dialog>
      </div>
    );
  }
}

const Stats = ({ word, correct, all, status, playGame, }) => (
<div>
  <h2>Review</h2>
  {correct.map((c, i) => <h1 key={i}>A {ANIMAP.get(c).join(', ')} of {c}</h1>)}
  {all.map((c, i) => <h1 key={i}>A {ANIMAP.get(c).join(', ')} of {c}</h1>)}
</div>);

export default connect(mapStateToProps, statusActs)(StatsDialog);
