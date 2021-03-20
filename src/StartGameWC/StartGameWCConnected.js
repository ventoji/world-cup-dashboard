import React from 'react';
import { connect } from 'react-redux';
import StartGameWC from './StartGameWC';
import { addMatchWC } from '../store/actions/actions';

const StartGameWCConnected = ({ addMatchWC }) => {
  const onSubmit = (mathDetails) => {
    addMatchWC(mathDetails);
  };

  return <StartGameWC onSubmit={onSubmit} />;
};

const mapDispatchToProps = (dispatch) => ({
  addMatchWC: (mathDetails) => dispatch(addMatchWC(mathDetails)),
});

export default connect(undefined, mapDispatchToProps)(StartGameWCConnected);
