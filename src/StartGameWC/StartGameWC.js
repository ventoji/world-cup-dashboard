import React, { useState } from 'react';
import InputWC from '../InputWC';
import ButtonWC from '../ButtonWC';
import PropTypes from 'prop-types';
import { validateInputsWCField } from '../utils/validators';

const INITIAL_GAME = {
  homeTeam: '',
  awayTeam: '',
  homeScore: 0,
  awayScore: 0,
}

const errorBlock = (message) => {
  return message && (
    <div  style={{ color: 'red' }}>
      {message}
    </div>
  );
};

const StartGameWC = ({ onSubmit,countries }) => {
  const [matchDetails, setMatchDetails] = useState(INITIAL_GAME );
  const [errors, setErrors] = useState({});

  const handleMatchDetails = (event) => {
    const value = event.target.value;
    const field = event.target.name;


    setMatchDetails({
      ...matchDetails,
      [field]: value,
    });
  };

  const sendMatchDetails = (event) => {
    event.preventDefault();
    const errors = validateInputsWCField(matchDetails);
    setErrors(errors);
    const isValidForm = Object.getOwnPropertyNames(errors).length === 0;
    if(isValidForm){
      onSubmit(matchDetails);
    }
  
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
        error={errors.hometeam}
      />
      <InputWC
        htmlId="awayTeam"
        label="away team"
        type="text"
        name="awayTeam"
        placeholder="country name"
        onChange={handleMatchDetails}
        error={errors.awayteam}
      />
        {errorBlock(errors.sameteams)}
        {errorBlock(errors.countryname)}

      <ButtonWC label="Start new game" onClick={sendMatchDetails} />
    </>
  );
};

StartGameWC.defaultProps ={
  countries: []
}

StartGameWC.propTypes = {
    /** Function to submit new players */
    onSubmit: PropTypes.func.isRequired,
    /** Countries  */
    countries: PropTypes.array.isRequired
};

export default StartGameWC;
