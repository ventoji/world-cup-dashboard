import React from 'react';
import './FootballCupScoreBoard.css';
import StartGameWCConnected from '../StartGameWC/StartGameWCConnected';
import ScoreBoardConnected from '../ScoreBoard/ScoreBoardConnected';
import SummaryResultWCConnected from '../SummaryResult/SummaryResultsConnected';
import CountriesAPI from '../CountriesAPI/CountriesAPI';
import ActivePlayerScore from '../ActivePlayerScore/ActivePlayerScore';

/** World Cup Dashboard component  */
const FootballCupScoreBoard = () => {
  return (
    <>
      <main className="main-content">
        <div className="show-matches">
          <div className="scoreboard">
            <h4> list of active games </h4>
            <ScoreBoardConnected />
          </div>
          <div className="summary-result">
            <h4> Summary of the ended games </h4>
            <SummaryResultWCConnected />
          </div>
        </div>

        <div className="add-players">
          <h4> Start a new game </h4>
          <StartGameWCConnected />
        </div>

        <ActivePlayerScore />

        <div className="countries">
          <CountriesAPI />
        </div>
      </main>
    </>
  );
};

export default FootballCupScoreBoard;
