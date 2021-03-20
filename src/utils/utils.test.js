import { sortResults, findById, removeById } from './index';

const startedGames = [
  {
    id: 1,
    startAt: 1616113389721,
    homeTeam: 'Mexico',
    awayTeam: 'Canada',
    homeScore: 0,
    awayScore: 3,
  },
  {
    id: 2,
    startAt: 1616113389731,
    homeTeam: 'Spain',
    awayTeam: 'Brasil',
    homeScore: 0,
    awayScore: 1,
  },
  {
    id: 3,
    startAt: 1616188715894,
    homeTeam: 'Argentina',
    awayTeam: 'Australia',
    homeScore: 1,
    awayScore: 1,
  },
  {
    id: 4,
    startAt: 1616113389731,
    homeTeam: 'Venezuela',
    awayTeam: 'France',
    homeScore: 2,
    awayScore: 0,
  },
];
const sortGames = [
  {
    id: 1,
    startAt: 1616113389721,
    homeTeam: 'Mexico',
    awayTeam: 'Canada',
    homeScore: 0,
    awayScore: 3,
  },
  {
    id: 3,
    startAt: 1616188715894,
    homeTeam: 'Argentina',
    awayTeam: 'Australia',
    homeScore: 1,
    awayScore: 1,
  },
  {
    id: 4,
    startAt: 1616113389731,
    homeTeam: 'Venezuela',
    awayTeam: 'France',
    homeScore: 2,
    awayScore: 0,
  },
  {
    id: 2,
    startAt: 1616113389731,
    homeTeam: 'Spain',
    awayTeam: 'Brasil',
    homeScore: 0,
    awayScore: 1,
  },
];

it('should sort final results by total score and most recently added', () => {
  const results = sortResults(startedGames);

  expect(results).toEqual(sortGames);
});

it('should find match by id', () => {
  const id = startedGames[0].id;

  const foundUser = findById(startedGames, id);

  expect(foundUser).toEqual(startedGames[0]);
});

it('should remove by id', () => {
  const id = startedGames[0].id;

  const state = removeById(startedGames, id);

  expect(state).toEqual([
    {
      id: 2,
      startAt: 1616113389731,
      homeTeam: 'Spain',
      awayTeam: 'Brasil',
      homeScore: 0,
      awayScore: 1,
    },
    {
      id: 3,
      startAt: 1616188715894,
      homeTeam: 'Argentina',
      awayTeam: 'Australia',
      homeScore: 1,
      awayScore: 1,
    },
    {
      id: 4,
      startAt: 1616113389731,
      homeTeam: 'Venezuela',
      awayTeam: 'France',
      homeScore: 2,
      awayScore: 0,
    },
  ]);
});
