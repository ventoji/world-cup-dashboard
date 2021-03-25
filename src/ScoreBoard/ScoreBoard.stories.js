import React from 'react';
import ScoreBoard from './ScoreBoard';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'WC Components/ScoreBoard',
  component: ScoreBoard,
  decorators: [withKnobs],
};

const startedGames = [
  {
    id: 1,
    startAt: 1616113389731,
    homeTeam: 'Mexico',
    awayTeam: 'Canada',
    homeScore: 0,
    awayScore: 0,
  },
  {
    id: 2,
    startAt: 1616113389731,
    homeTeam: 'Spain',
    awayTeam: 'Brasil',
    homeScore: 0,
    awayScore: 0,
  },
];

const Template = () => <ScoreBoard games={startedGames} />;

export const Default = Template.bind({});

Default.args = {
  games: [],
  updateScore: action('cick'),
  finishGame: action('cick'),
};
