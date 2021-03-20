import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import FootballCupScoreBoard from '../src/FootballCupScoreBoard';
//  <FootballCupScoreBoard />
//import InputWC from '../src/InputWC';

const store = configureStore();
// store.dispatch({
//     type: 'ADD_TODO',
//     text: 'Read the docs'
//   });
const state = store.getState();
console.log(state);

const App = () => {
  //  const [startDate, setStartDate] = useState(new Date());
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
