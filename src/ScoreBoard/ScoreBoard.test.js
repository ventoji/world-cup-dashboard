import React from 'react';
import ScoreBoard from './ScoreBoard';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('ScoreBoard  Component', () => {
  let scoreBoard;
  const games = [
    {
      id: 1,
      startAt: 1616113389731,
      homeTeam: 'Mexico',
      awayTeam: 'Canada',
      homeScore: 0,
      awayScore: 0,
    },
    {
      id: 2,
      startAt: 1616113389731,
      homeTeam: 'Spain',
      awayTeam: 'Brasil',
      homeScore: 0,
      awayScore: 0,
    },
  ];

  beforeEach(() => {
    scoreBoard = shallow(
      <ScoreBoard games={games} updateScore={() => {}} finishGame={() => {}} />,
    );
  });

  it('Should be defined', () => {
    expect(ScoreBoard).toBeDefined();
  });

  it('Should render properly', () => {
    expect(toJson(scoreBoard)).toMatchSnapshot();
    let element = scoreBoard.find('MatchStarted');
    expect(element).toHaveLength(2);
  });
});
