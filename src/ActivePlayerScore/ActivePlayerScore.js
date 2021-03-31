import React, { useState } from 'react';
import { connect } from 'react-redux';
import InputWC from '../InputWC';

export const ActivePlayer = ({activeGames}) => {

  const [errors, setErrors] = useState('');
  const [foundPlayer, setFoundPlayer] = useState('');

  const handleActivePlayer = (event) => {
        const value = event.target.value.trim();
        const players = []

        const foundPlayer = activeGames.map((item) => {
            return [...players,item.homeTeam,item.awayTeam]
        })
        .flat()
        .filter(item => item === value);

        console.log(foundPlayer);
        setFoundPlayer(foundPlayer);
       // if(foundPlayer) setFoundPlayer(foundPlayer);
  }

    return (
        <>
            <InputWC
                htmlId="findTeam"
                label="fiend a team"
                type="text"
                placeholder="country name"
                name="homeTeam"
                onChange={handleActivePlayer}
                error={errors.hometeam}
            />
            {foundPlayer.length > 0 ? <span> {foundPlayer}</span>:<span>  </span>}
        </>
    );
};

const mapStatetoProps = (state) => {
    return {
      activeGames: state.activeGames,
    };
  };

  
  export default connect(mapStatetoProps)(ActivePlayer);
