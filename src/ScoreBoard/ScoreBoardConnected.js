import React from 'react';
import { connect } from 'react-redux';
import ScoreBoard from './ScoreBoard';
// import { listMatches } from '../utils';
import {
  updateMatchWC,
  finishMatchWC,
  showMatchResultWc,
} from '../store/actions/actions';

const ScoreBoardConnected = ({
  games,
  updateMatchWC,
  finishMatchWC,
  showMatchResultWc,
}) => {
  const updateScore = (matchScore) => {
    updateMatchWC(matchScore);
  };

  const finishGame = (matchScore) => {
    showMatchResultWc(matchScore);
    finishMatchWC(matchScore.id);
  };

  return (
    <ScoreBoard
      games={games}
      updateScore={updateScore}
      finishGame={finishGame}
    />
  );
};

const mapStatetoProps = (state) => {
  console.log(state);
  return {
    games: state.activeGames,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateMatchWC: (matchScore) => dispatch(updateMatchWC(matchScore)),
  finishMatchWC: (id) => dispatch(finishMatchWC(id)),
  showMatchResultWc: (matchScore) => dispatch(showMatchResultWc(matchScore)),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(ScoreBoardConnected);
