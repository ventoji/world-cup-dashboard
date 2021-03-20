import React, { useState } from 'react';
import InputWC from '../InputWC';
import ButtonWC from '../ButtonWC';

const StartGameWC = ({ onSubmit }) => {
  const [matchDetails, setMatchDetails] = useState({
    homeTeam: '',
    awayTeam: '',
    homeScore: 0,
    awayScore: 0,
  });

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

export default StartGameWC;
