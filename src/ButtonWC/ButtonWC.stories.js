import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ButtonWC from './ButtonWC';

export default {
  title: 'WC Components/ButtonWC',
  component: ButtonWC,
  decorators: [withKnobs],
};

const Template = (args) => <ButtonWC {...args} />;

export const Default = Template.bind({});
