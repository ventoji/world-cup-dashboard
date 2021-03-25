import React from 'react';
import { Provider } from 'react-redux';
//import withReduxEnhancer from 'addon-redux/enhancer';
//import withRedux from 'addon-redux/withRedux';
//import addons from '@storybook/addons';
//import { createStore } from 'redux'
import FootballCupScoreBoard from './FootballCupScoreBoard';
import configureStore from '../store/configureStore';
//import { rootReducer } from '../store/configureStore'

const store = configureStore();
//const store = createStore(rootReducer, withReduxEnhancer);
// console.log(store);
// const withReduxSettings = {
//     Provider,
//     store
// };
//const withReduxDecorator = withRedux(addons,withReduxSettings);

export default {
  title: 'WC App/FootballCupScoreBoard',
  component: FootballCupScoreBoard,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
    //   withReduxDecorator
  ],
};

const Template = (args) => <FootballCupScoreBoard {...args} />;

export const Default = Template.bind({});
