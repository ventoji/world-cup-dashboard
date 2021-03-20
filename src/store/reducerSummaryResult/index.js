import * as matchActions from '../actions/actions';

const summaryResult = [];

export default (state = summaryResult, action) => {
  switch (action.type) {
    case matchActions.SHOW_RESULTS_WC:
      return [...state, action.payload];
    default:
      return state;
  }
};
