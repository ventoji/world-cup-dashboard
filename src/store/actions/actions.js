export const ADD_MATCH_WC = 'ADD_MATCH_WC';
export const UPDATE_MATCH_WC = 'UPDATE_MATCH_WC';
export const FINISH_MATCH_WC = 'FINISH_MATCH_WC';
export const SHOW_RESULTS_WC = 'SHOW_RESULTS_WC';
export const ADD_COUNTRIES_WC = 'ADD_COUNTRIES_WC';

export const addMatchWC = (matchDetails) => ({
  type: ADD_MATCH_WC,
  payload: matchDetails,
});

export const updateMatchWC = (matchScore) => ({
  type: UPDATE_MATCH_WC,
  payload: matchScore,
});

export const finishMatchWC = (id) => ({
  type: FINISH_MATCH_WC,
  payload: id,
});

export const showMatchResultWc = (matchToStore) => ({
  type: SHOW_RESULTS_WC,
  payload: matchToStore,
});

export const addCountries = (countries) =>({
  type: ADD_COUNTRIES_WC,
  payload: countries
});
