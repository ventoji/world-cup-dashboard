import React from 'react';
import LabelWC from './LabelWC';
import { shallow } from 'enzyme';

describe('Label Component', () => {
  let label;

  beforeEach(() => {
    label = shallow(<LabelWC htmlFor="labelElement" label="field label" />);
  });

  it('Should be defined', () => {
    expect(LabelWC).toBeDefined();
  });

  it('Should render properly', () => {
    const element = label.find('label');

    expect(label).toMatchSnapshot();
    // label exists
    expect(element).toHaveLength(1);
    // label has attribute htmlFor
    expect(element.props().htmlFor).toMatch(/labelElement/);
    // label is the excpeted string defined as an input
    expect(element.props().children[0]).toEqual('field label');
  });

  it('Should render label with a red asterisk when field is required', () => {
    label = shallow(
      <LabelWC htmlFor="labelElement" label="field label" required />,
    );

    expect(label).toMatchSnapshot();
    const element = label.find('label span');
    expect(element.props().style).toEqual({ color: 'red' });
    expect(element.props().children).toMatch(/\*/);
  });
});
