import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { ActivePlayer } from './ActivePlayerScore';

describe('ActivePlayer component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      activeGames: ['Italy', 'Spain'],
    };

    component = shallow(<ActivePlayer {...props} />);
  });

  it('Should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should render properly', () => {
    expect(toJson(component)).toMatchSnapshot();
    expect(component.find('InputWC')).toHaveLength(1);
  });

  //   it('should find a player that is actively playing', () => {

  //     //console.log('SHALLOW',toJson(component));
  //     console.log(toJson(component).children[0].props.onChange);
  //     component = shallow(<ActivePlayer {...props} />);
  //   //  console.log('MOUNT',toJson(component));
  //     const input = component.find('InputWC');

  //     input.simulate('change',{
  //         target: { value: 'Italy' }
  //     });
  //    // expect(toJson(component).children[0].props.onChange[0]).toHaveBeenCalled();
  //     console.log(input);
  //     expect(input.get(0).value).toEqual('Italy');

  //   });
});
