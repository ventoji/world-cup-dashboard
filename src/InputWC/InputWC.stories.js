import React from 'react';
import InputWC from './InputWC';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'WC Components/InpuWC',
  component: InputWC,
  decorators: [withKnobs],
};

const Template = (args) => <InputWC {...args} />;

export const Default = Template.bind({});

Default.args = {
  htmlFor: 'label',
  label: text('label', 'home Team'),
  name: text('label', 'hometeam'),
  onChange: action('cick'),
  type: 'text',
};

/** Numeric input a */
export const NumericInput = Template.bind({});
NumericInput.args = {
  htmlFor: 'labelNumeric',
  label: text('label', 'Score Team'),
  name: text('label', 'scoreteam'),
  onChange: action('cick'),
  type: 'number',
};
