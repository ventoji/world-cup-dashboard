import reducer from './index';
import * as matchActions from '../actions/actions';

const startedGames = [
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

it('should set default state', () => {
  const state = reducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

it('should add a new match when a game start', () => {
  const matchDetails = {
    homeTeam: 'Uruguay',
    awayTeam: 'Italy',
    homeScore: 0,
    awayScore: 0,
  };
  //  const id = generateId(startedGames);

  const action = {
    type: matchActions.ADD_MATCH_WC,
    payload: matchDetails,
  };

  const state = reducer(startedGames, action);
  expect(state).toEqual([
    ...startedGames,
    {
      id: state[2].id,
      startAt: state[2].startAt,
      ...matchDetails,
    },
  ]);
});

it('should return the same state if some of the player are already playing', () => {
  const matchDetails = {
    homeTeam: 'Spain',
    awayTeam: 'Brasil',
    homeScore: 0,
    awayScore: 0,
  };

  const action = {
    type: matchActions.ADD_MATCH_WC,
    payload: matchDetails,
  };

  const state = reducer(startedGames, action);
  expect(state).toEqual([...startedGames]);
});

it('should return the same state if home team is the same away team', () => {
  const matchDetails = {
    homeTeam: 'Spain',
    awayTeam: 'Spain',
    homeScore: 0,
    awayScore: 0,
  };
  const action = {
    type: matchActions.ADD_MATCH_WC,
    payload: matchDetails,
  };

  const state = reducer(startedGames, action);
  expect(state).toEqual([...startedGames]);
});

it('should update score if some of the player increases their score', () => {
  const matchScore = {
    id: 1,
    homeScore: 1,
    awayScore: 0,
  };

  const action = {
    type: matchActions.UPDATE_MATCH_WC,
    payload: matchScore,
  };

  const state = reducer(startedGames, action);
  expect(state).toEqual([
    {
      id: 1,
      startAt: 1616113389731,
      homeTeam: 'Mexico',
      awayTeam: 'Canada',
      homeScore: 1,
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
  ]);
});

it('should remove a game from score board when finishes', () => {
  const action = {
    type: matchActions.FINISH_MATCH_WC,
    payload: 1,
  };
  const state = reducer(startedGames, action);
  expect(state).toEqual([startedGames[1]]);
});
