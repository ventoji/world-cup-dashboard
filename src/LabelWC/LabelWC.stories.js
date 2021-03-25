import React from 'react';
import LabelWC from './LabelWC';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'WC Components/LabelWC',
  component: LabelWC,
  decorators: [withKnobs],
};

const Template = (args) => <LabelWC {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: text('label', 'home Team'),
};

export const RequiredLabel = Template.bind({});
RequiredLabel.args = {
  label: text('label', 'home Team'),
  required: true,
};
