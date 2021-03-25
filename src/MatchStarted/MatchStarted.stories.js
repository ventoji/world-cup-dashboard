import React from 'react';
import MatchStarted from './MatchStarted';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'WC Components/MatchStarted',
  component: MatchStarted,
  decorators: [withKnobs],
};

const match = {
  id: 1,
  startAt: 1616113389731,
  homeTeam: 'Mexico',
  awayTeam: 'Canada',
  homeScore: 0,
  awayScore: 0,
};

const Template = (args) => (
  <ul>
    <MatchStarted {...args} />
  </ul>
);

export const Default = Template.bind({});

Default.args = {
  match: match,
  updateScore: action('updated scored'),
  handleFinish: action('finish game'),
};
