import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ButtonWC from './ButtonWC';

describe('Button component', () => {
  let button; // use shallow

  beforeEach(() => {
    button = shallow(<ButtonWC label="button test" onClick={() => {}} />);
  });

  it('should be defined', () => {
    expect(ButtonWC).toBeDefined();
  });

  it('should be submit type', () => {
    expect(toJson(button)).toMatchSnapshot();

    expect(button.find({ type: 'submit' })).toBeTruthy();
  });

  it('should call mock function when button is clicked', () => {
    const mockHandleClick = jest.fn();

    const button = shallow(<ButtonWC onClick={mockHandleClick} label="Ok" />);

    // button.find('button').simulate('click');
    button.simulate('click');

    expect(mockHandleClick.mock.calls.length).toEqual(1);
    expect(mockHandleClick).toHaveBeenCalled();
  });
});
