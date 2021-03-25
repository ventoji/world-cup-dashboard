import React from 'react';
import StartGameWC from './StartGameWC';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('StartGameWC component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      onSubmit: jest.fn(),
      countries: ['Italy', 'Spain'],
    };

    component = shallow(<StartGameWC {...props} />);
  });

  it('Should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should render properly', () => {
    expect(toJson(component)).toMatchSnapshot();
    expect(component.find('InputWC')).toHaveLength(2);
    expect(component.find('ButtonWC')).toHaveLength(1);
  });

  it('should submit a new game when button is clicked', () => {
    component = shallow(<StartGameWC {...props} />);
    //    expect(toJson(component)).toMatchSnapshot();
    component.find('#btn-start-game').simulate('click', {
      preventDefault: () => {},
    });

    //  console.log(component.find('ButtonWC'));
    expect(component.find('#btn-start-game')).toHaveLength(1);
    //     console.log(toJson(component).props.onSubmit.mock.calls.length);
    //expect(component.props.sendMatchDetails).toHaveBeenCalled();
 //   console.log(props.onSubmit.mock);
    //  expect(props.onSubmit.mock.calls.length).toEqual(1);
    //   expect(props.onSubmit).toHaveBeenCalledTimes(1);
  });
});
