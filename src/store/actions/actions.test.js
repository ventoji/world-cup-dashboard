import configureStore from 'redux-mock-store';
import * as matchActions from './actions';

const middlewares = [];
const mockStore = configureStore(middlewares);

let initialState;
let store;

beforeEach(() => {
  initialState = [{}];
  store = mockStore(initialState);
});

it('Should dispatch add match WC to score board when a game start', () => {
  const matchDetails = {
    homeTeam: 'México',
    awayTeam: 'Canada',
    homeScore: 0,
    awayStore: 0,
  };

  const addMatchWC = () => ({
    type: matchActions.ADD_MATCH_WC,
    payload: matchDetails,
  });

  store.dispatch(addMatchWC());
  const actions = store.getActions();
  const expectedPayload = {
    type: matchActions.ADD_MATCH_WC,
    payload: matchDetails,
  };
  expect(actions).toEqual([expectedPayload]);
});

it('Should dispatch update score WC when a player increases their score', () => {
  const matchScore = {
    id: 1,
    homeScore: 1,
    awayScore: 0,
  };
  const updateMatchWC = () => ({
    type: matchActions.UPDATE_MATCH_WC,
    payload: matchScore,
  });

  store.dispatch(updateMatchWC());
  const actions = store.getActions();
  const expectedPayload = {
    type: matchActions.UPDATE_MATCH_WC,
    payload: matchScore,
  };
  expect(actions).toEqual([expectedPayload]);
});

it('Should dispatch delete a match from score board WC when a game finishes', () => {
  const id = 1;

  const finishMatchWC = () => ({
    type: matchActions.FINISH_MATCH_WC,
    payload: id,
  });

  store.dispatch(finishMatchWC());
  const actions = store.getActions();
  const expectedPayload = {
    type: matchActions.FINISH_MATCH_WC,
    payload: id,
  };
  expect(actions).toEqual([expectedPayload]);
});

it('Should dispatch add a match to the result when game finishes', () => {
  const matchToStore = {
    homeTeam: 'México',
    awayTeam: 'Canada',
    homeScore: 0,
    awayStore: 2,
  };

  const showMatchResultWc = () => ({
    type: matchActions.SHOW_RESULTS_WC,
    payload: matchToStore,
  });

  store.dispatch(showMatchResultWc());
  const actions = store.getActions();
  const expectedPayload = {
    type: matchActions.SHOW_RESULTS_WC,
    payload: matchToStore,
  };
  expect(actions).toEqual([expectedPayload]);
});
