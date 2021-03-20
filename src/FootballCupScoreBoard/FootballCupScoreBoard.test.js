import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FootballCupScoreBoard from './FootballCupScoreBoard';


describe('FootballCupScoreBoard  Component', () => {

    let footballComponent;
   
    
    beforeEach(() => {
        footballComponent = shallow(
        <FootballCupScoreBoard />,
      );
    });

    it('Should be defined', () => {
        expect(FootballCupScoreBoard).toBeDefined();
      });

    
  it('Should render properly', () => {
  

    expect(toJson( footballComponent)).toMatchSnapshot();
 
  });


})