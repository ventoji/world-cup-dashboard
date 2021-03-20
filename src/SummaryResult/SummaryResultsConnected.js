import React from 'react';
import { connect } from 'react-redux';
import SummaryResult from './SummaryResult';
import { sortResults } from '../utils';

const SummaryResultWCConnected = ({ results }) => {
  return <SummaryResult summary={results} />;
};

const mapStatetoProps = (state) => {
  return {
    results: sortResults(state.finishedGames),
  };
};

export default connect(mapStatetoProps, undefined)(SummaryResultWCConnected);
