import React from 'react';
import MatchStarted from './MatchStarted';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('MatchStarted  Component', () => {
  let matchStarted;
  const match = {
    id: 1,
    startAt: 1616113389731,
    homeTeam: 'Mexico',
    awayTeam: 'Canada',
    homeScore: 0,
    awayScore: 0,
  };

  beforeEach(() => {
    matchStarted = shallow(
      <MatchStarted
        match={match}
        updateScore={() => {}}
        handleFinish={() => {}}
      />,
    );
  });

  it('Should be defined', () => {
    expect(MatchStarted).toBeDefined();
  });

  it('Should render properly', () => {
    let element = matchStarted.find('InputWC');

    expect(toJson(matchStarted)).toMatchSnapshot();
    expect(element).toHaveLength(2);

    element = matchStarted.find('ButtonWC');
    expect(element).toHaveLength(2);
  });
});
