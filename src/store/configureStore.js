import { createStore, combineReducers } from 'redux';
import reducerActiveGames from './reducer';
import reducerSumaryResult from './reducerSummaryResult';
import reducerCountiesWC from './reducerCountries';

export const rootReducer = combineReducers({
  activeGames: reducerActiveGames,
  finishedGames: reducerSumaryResult,
  countries: reducerCountiesWC,
});

// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default () => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
