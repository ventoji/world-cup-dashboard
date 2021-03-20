import reducerSummaryResult from './index';
import * as matchActions from '../actions/actions';

let finishedGames;

beforeEach(() => {
  finishedGames = [];
});

it('should store a match when a game finishes', () => {
  const matchToStore = {
    id: 1,
    homeTeam: 'Uruguay',
    awayTeam: 'Italy',
    homeScore: 1,
    awayScore: 0,
  };

  const action = {
    type: matchActions.SHOW_RESULTS_WC,
    payload: matchToStore,
  };

  const state = reducerSummaryResult(finishedGames, action);
  expect(state).toEqual([...finishedGames, action.payload]);
});
