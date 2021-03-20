import React from 'react';
import InputWC from './InputWC';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Input  Component', () => {
  let inputWC;

  beforeEach(() => {
    inputWC = shallow(
      <InputWC
        htmlId="labelElement"
        label="Home Team"
        name="hometeam"
        onChange={() => {}}
      />,
    );
  });

  it('Should be defined', () => {
    expect(InputWC).toBeDefined();
  });

  it('Should render properly', () => {
    let element = inputWC.find('input');

    expect(toJson(inputWC)).toMatchSnapshot();
    // input exists
    expect(element).toHaveLength(1);
    // input has attribute id equal to htmlId
    expect(element.props().id).toMatch(/labelElement/);
    expect(element.props().name).toMatch(/hometeam/);

    element = inputWC.find('Label');
    expect(element).toHaveLength(1);
  });

  it('should call mock function when input changes', () => {
    const mockHandleClick = jest.fn();

    inputWC = shallow(
      <InputWC
        htmlId="labelElement"
        label="Home Team"
        name="hometeam"
        onChange={mockHandleClick}
      />,
    );

    inputWC.find('input').simulate('change');

    //  inputWC.simulate('change');

    expect(mockHandleClick.mock.calls.length).toEqual(1);
    expect(mockHandleClick).toHaveBeenCalled();
  });
});
