import { v1 as uuidv1 } from 'uuid';

export const generateId = () => {
  return uuidv1();
};

export const findPlayer = (state, matchDetails) => {
  if (matchDetails.awayTeam === matchDetails.homeTeam) {
    return false;
  }

  const foundedPlayer = state.filter(
    (item) =>
      item.homeTeam === matchDetails.homeTeam ||
      item.awayTeam === matchDetails.awayTeam,
  );

  return foundedPlayer.length === 0;
};

export const listMatches = (state) => {
  return state.map((item) => ({
    ...item,
    homeScore: parseInt(item.homeScore),
    awayScore: parseInt(item.awayScore),
  }));
};

export const findById = (state, id) => {
  return state.find((item) => item.id === id);
};

export const removeById = (state, idpayload) => {
  return state.filter(({ id }) => id !== idpayload);
};

export const sortResults = (state) => {
  return listMatches(state).sort((a, b) => {
    if (a.awayScore + a.homeScore > b.awayScore + b.homeScore) {
      return -1;
    }
    if (a.awayScore + a.homeScore < b.awayScore + b.homeScore) {
      return 1;
    }
    if (a.startAt > b.startAt) return -1;
    if (a.startAt < b.startAt) return 1;
    // a must be equal to b
    return 0;
  });
};

export const nameCountries = (state) => {
  const countries = state.length > 0 ? state[0]: state;
  const conuntryName = countries.map(item => item.name.toLowerCase());
  return conuntryName;
}
