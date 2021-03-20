import React from 'react';
import StartGameWC from './StartGameWC';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'WC Components/StartGaneWC',
  component: StartGameWC,
  decorators: [withKnobs]
};

const Template = (args) => <StartGameWC {...args} />;

export const Default = Template.bind({});


Default.args = {
  onSubmit: action('cick')
};