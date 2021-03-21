import * as matchActions from '../actions/actions';

const countries = [];

export default (state = countries, action) => {
  switch (action.type) {
    case matchActions.ADD_COUNTRIES_WC:
      return [...state, action.payload];
    default:
      return state;
  }
};
