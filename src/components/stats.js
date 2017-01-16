import React from 'react';
import { connect, } from 'react-redux';
import { ANIMAP, } from '../utils';

const mapStateToProps = ({ word, animals: { correct, all, }, }) =>
({ word, correct, all, });

const Stats = ({ word, correct, all, }) => (
<div>
  <h2>Review</h2>
  {correct.map((c, i) => <h1 key={i}>A {ANIMAP.get(c).join(', ')} of {c}</h1>)}
  {all.map((c, i) => <h1 key={i}>A {ANIMAP.get(c).join(', ')} of {c}</h1>)}
</div>);

export default connect(mapStateToProps)(Stats);
