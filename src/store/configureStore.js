import { createStore, combineReducers } from 'redux';
import reducerActiveGames from './reducer';
import reducerSumaryResult from './reducerSummaryResult';

const rootReducer = combineReducers({
  activeGames: reducerActiveGames,
  finishedGames: reducerSumaryResult,
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
