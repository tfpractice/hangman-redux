import React from 'react';
import { connect, } from 'react-redux';

const mapStateToProps = ({ guesses, }, { chr, }) =>
({ isGuessed: new Set(guesses).has(chr.toUpperCase()), });

const About = () => (
<div>
  <h2>About</h2>
  <h1>You will receive a list of animals, are to guess the names of the collective noun for the animal</h1> </div>);

export default About;
