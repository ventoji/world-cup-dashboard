import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputWC from '../InputWC';
import ButtonWC from '../ButtonWC';
import { validateScoreWCfields } from '../utils/validators';


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
    const [errors, setErrors] = useState({});
  
    const handleMatchScore = (event) => {
  
    const field = event.target.name;
    const value = event.target.value;
    const errors = validateScoreWCfields(field,value);
    setErrors(errors);

      setMatchScore({
        ...matchScore,
        [field]: value >= 0 ? value : matchScore[field]
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
          error={errors.homeScore}
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
          error={errors.awayScore}
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

  MatchStarted.propTypes = {
    /** Contains info about players and scores */
    match: PropTypes.object,
     /** Function to update Score */
    updateScore: PropTypes.func.isRequired,
      /** Function to finish a game */
    handleFinish: PropTypes.func.isRequired
  };
  
  MatchStarted.defaultProps = {
    match: {},
    updateScore: () => {},
    finishGame: () => {}
  };
  
  export default MatchStarted;