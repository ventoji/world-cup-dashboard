import * as matchActions from '../actions/actions';
import { generateId, findPlayer, removeById } from '../../utils';

const initialGames = [];

export default (state = initialGames, action) => {
  let foundPlayer;

  switch (action.type) {
    case matchActions.ADD_MATCH_WC:
      const idNew = generateId();
      const startAt = Date.now();
      foundPlayer = findPlayer(state, action.payload);

      return foundPlayer
        ? [
            ...state,
            {
              startAt,
              id: idNew,
              ...action.payload,
            },
          ]
        : state;

    case matchActions.UPDATE_MATCH_WC:
      const { id, awayScore, homeScore } = action.payload;

      return state.map((match) => {
        if (match.id === id) {
          return {
            ...match,
            awayScore,
            homeScore,
          };
        } else {
          return match;
        }
      });

    case matchActions.FINISH_MATCH_WC:
      return removeById(state, action.payload);
    
    default:
      return state;
  }
};
