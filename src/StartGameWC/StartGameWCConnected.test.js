import React from 'react';
import { Provider } from 'react-redux';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';

import { StartGameWCConnected } from './StartGameWCConnected';

const mockStore = configureStore([]);

describe('StartGameWCConnected component', () => {
  let store;
  let component;
  let props;

  beforeEach(() => {
    store = mockStore({
      state: {
        countries: [],
        startedGames: [],
        summaryResult: [],
      },
    });
    store.dispatch = jest.fn();

    props = {
      addMatchWC: jest.fn(),
      countries: [],
    };
    component = shallow(
      <Provider store={store}>
        <StartGameWCConnected {...props} />
      </Provider>,
    ).dive();
  });

  it('Should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should render with given state from Redux store', () => {
    expect(toJson(component)).toMatchSnapshot();
    expect(component.find('StartGameWCConnected')).toHaveLength(1);
    //    expect(component.find('Connect(StartGameWCConnected)')).toHaveLength(1);
    // expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
