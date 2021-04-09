import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import FootballCupScoreBoard from '../src/FootballCupScoreBoard';
import Autocomplete from '../src/Autocomplete';
import Autocomplete2 from './Autocomplete/Autocomplete2';
import TesRef from './Autocomplete/TestRef';
import Focus from './Autocomplete/Focus';
import AutocompleteNew from './Autcomplete-new/AutcompleteNew';
//<Autocomplete />
//     <Autocomplete2 />

/*
 <div*>
        <AutcompleteNew />
      </div*/

const store = configureStore();

// const state = store.getState();

const App = () => {
  return (
    <div>
      <h1>Simple World Cup Demo</h1>
      <FootballCupScoreBoard />

      <div>
        <span> autocomplete feature</span>
      </div>
      <TesRef />
      <div>
        <Focus />
      </div>

      <div>
        <Autocomplete />
      </div>
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
