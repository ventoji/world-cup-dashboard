import React from 'react';
import PropTypes from 'prop-types';

const SummaryResult = ({ summary }) => {
  const shouldRender = Object.keys(summary).length !== 0;
  return shouldRender ? (
    <ul className="list-summary">
      {summary.map((match, index) => (
        <li key={index}>
          {match.homeTeam} : {match.homeScore} - {match.awayTeam}:{' '}
          {match.awayScore}
        </li>
      ))}
    </ul>
  ) : (
    <span> No results for now</span>
  );
};

SummaryResult.propTypes = {
  /** Array of finished games */
  summary: PropTypes.array,
};

SummaryResult.defaultProps = {
  summary: [],
};

export default SummaryResult;
