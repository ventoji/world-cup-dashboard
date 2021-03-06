import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ButtonWC from './ButtonWC';

export default {
  title: 'WC Components/ButtonWC',
  component: ButtonWC,
  // decorators: [withKnobs],
};

const Template = (args) => <ButtonWC {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: text('label', 'Start game'),
  onClick: action('cick'),
};
