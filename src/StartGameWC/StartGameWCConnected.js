import React from 'react';
import { connect } from 'react-redux';
import StartGameWC from './StartGameWC';
import { addMatchWC } from '../store/actions/actions';
import { nameCountries } from '../utils';

export const StartGameWCConnected = ({ countries, addMatchWC }) => {
  const onSubmit = (mathDetails) => {
    addMatchWC(mathDetails);
  };
  return <StartGameWC onSubmit={onSubmit} countries={countries} />;
};

const mapStatetoProps = (state) => {
  return {
    countries: nameCountries(state.countries),
  };
};
const mapDispatchToProps = (dispatch) => ({
  addMatchWC: (mathDetails) => dispatch(addMatchWC(mathDetails)),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(StartGameWCConnected);
