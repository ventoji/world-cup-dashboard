import React from 'react';
import useRoveFocus from './useRoveFocus';
import options from '../Autocomplete/countries';
import Item from './Item';
import './AutcompleteNew.css';

const AutcompleteNew = () => {
  const [focus, setFocus] = useRoveFocus(options.length);
  return (
    <ul>
      {options.map((option, index) => (
        <Item
          key={option}
          setFocus={setFocus}
          index={index}
          focus={focus === index}
          character={option}
        />
      ))}
    </ul>
  );
};

export default AutcompleteNew;
