import React, { useState } from 'react';
import InputWC from '../InputWC';
import ButtonWC from '../ButtonWC';
import PropTypes from 'prop-types';

const SCORE_STYLE = {
  li: {
    display: 'flex',
    alignContent: 'space-around',
    marginBottom: '10px',
  },
};

const MatchStarted = ({ match, updateScore, handleFinish }) => {
  const [matchScore, setMatchScore] = useState({
    startAt: match.startAt,
    id: match.id,
    homeTeam: match.homeTeam,
    awayTeam: match.awayTeam,
    homeScore: 0,
    awayScore: 0,
  });

  const handleMatchScore = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);

    setMatchScore({
      ...matchScore,
      [event.target.name]: event.target.value,
    });
  };

  const submitScore = (event) => {
    event.preventDefault();
    updateScore({
      id: matchScore.id,
      homeScore: matchScore.homeScore,
      awayScore: matchScore.awayScore,
    });
  };

  const submitFinishGame = (event) => {
    event.preventDefault();
    handleFinish(matchScore);
  };

  return (
    <li className="list-player" style={SCORE_STYLE.li}>
      <span style={{ color: 'blue' }}> Match: </span>{' '}
      <InputWC
        htmlId="homeScore"
        label={match.homeTeam}
        value={matchScore.homeScore}
        name="homeScore"
        type="number"
        style={{ width: '35%' }}
        onChange={handleMatchScore}
      />{' '}
      -
      <InputWC
        htmlId="awayScore"
        label={match.awayTeam}
        value={matchScore.awayScore}
        name="awayScore"
        type="number"
        style={{ width: '35%' }}
        onChange={handleMatchScore}
      />
      <ButtonWC
        label="update"
        style={{ height: '35%' }}
        onClick={submitScore}
      />
      <ButtonWC
        label="finish"
        style={{ height: '35%' }}
        onClick={submitFinishGame}
      />
    </li>
  );
};
const ScoreBoard = ({ games, updateScore, finishGame }) => {
  const shouldRender = Object.keys(games).length !== 0;

  const handleFinish = (matchScore) => {
    console.log(matchScore);
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

InputWC.propTypes = {
  /** Array of active games */
  games: PropTypes.array,
};

ScoreBoard.defaultProps = {
  games: [],
};

export default ScoreBoard;
