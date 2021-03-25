import React from 'react';
import PropTypes from 'prop-types';
import MatchStarted from '../MatchStarted';

const ScoreBoard = ({ games, updateScore, finishGame }) => {
  const shouldRender = Object.keys(games).length !== 0;

  const handleFinish = (matchScore) => {
    finishGame(matchScore);
  };

  return shouldRender ? (
    <ul className="list-matches">
      {games.map((match, index) => (
        <MatchStarted
          key={match.id}
          match={match}
          updateScore={updateScore}
          handleFinish={handleFinish}
        />
      ))}
    </ul>
  ) : (
    <span> No match is playing now</span>
  );
};

ScoreBoard.propTypes = {
  /** Array of active games */
  games: PropTypes.array,
  /** Function to update Score */
  updateScore: PropTypes.func.isRequired,
  /** Function to finish a game */
  finishGame: PropTypes.func.isRequired,
};

ScoreBoard.defaultProps = {
  games: [],
  updateScore: () => {},
  finishGame: () => {},
};

export default ScoreBoard;
