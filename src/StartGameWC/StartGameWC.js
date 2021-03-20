import React, { useState } from 'react';
import InputWC from '../InputWC';
import ButtonWC from '../ButtonWC';
import PropTypes from 'prop-types';

const INITIAL_GAME = {
  homeTeam: '',
  awayTeam: '',
  homeScore: 0,
  awayScore: 0,
}

const StartGameWC = ({ onSubmit }) => {
  const [matchDetails, setMatchDetails] = useState(INITIAL_GAME );

  const handleMatchDetails = (event) => {
    setMatchDetails({
      ...matchDetails,
      [event.target.name]: event.target.value,
    });
  };

  const sendMatchDetails = (event) => {
    event.preventDefault();
    onSubmit(matchDetails);
  };
  return (
    <>
      <InputWC
        htmlId="homeTeam"
        label="home team"
        type="text"
        placeholder="country name"
        name="homeTeam"
        onChange={handleMatchDetails}
      />
      <InputWC
        htmlId="awayTeam"
        label="away team"
        type="text"
        name="awayTeam"
        placeholder="country name"
        onChange={handleMatchDetails}
      />
      <ButtonWC label="Start new game" onClick={sendMatchDetails} />
    </>
  );
};

StartGameWC.propTypes = {
    /** Function to submit new players */
    onSubmit: PropTypes.func.isRequired
};

export default StartGameWC;
