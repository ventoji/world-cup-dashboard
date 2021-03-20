import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import FootballCupScoreBoard from '../src/FootballCupScoreBoard';


const store = configureStore();

// const state = store.getState();

const App = () => {
  return (
    <div>
      <h1>Simple World Cup Demo</h1>
      <FootballCupScoreBoard />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app'),
);
