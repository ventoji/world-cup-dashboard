import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import useRoveFocus from './useRoveFocus';
import countries from './countries';
import './Autocomplete.css';
import Item from './Item';

const Autocomplete = () => {
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(false);
  const [focus, setFocus] = useRoveFocus(countries.length);

  const handleChange = (e) => {
    //  e.preventDefault();
    console.log(e.target.value);
    const userInput = e.target.value;
    const filteredSuggestions = countries.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    );

    setFilteredSuggestions(filteredSuggestions);
    setUserInput(userInput);
    setShowSuggestion(true);
  };

  const onKeyDown = (e) => {
    console.log(e.keyCode);

    if (e.keyCode === 13) {
      // enter key
      console.log('ENTER');
      e.preventDefault();
      setActiveSuggestion(0);
      setShowSuggestion(false);
      console.log(filteredSuggestions[focus], focus);
      setUserInput(filteredSuggestions[focus]);
      setFilteredSuggestions([]);
    } else if (e.keyCode === 38) {
      // "ArrowUp"
      e.preventDefault();
      console.log('active', activeSuggestion);
      if (activeSuggestion === 0) {
        return;
      }
      //       setActiveSuggestion(activeSuggestion-1);
    } else if (e.keyCode === 40) {
      // "ArrowDown"
      e.preventDefault();
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      //        setActiveSuggestion(activeSuggestion + 1);
    }
  };

  const onClick = (e) => {
    console.log('CLICK PARENT', e.currentTarget.innerText);

    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestion(false);
    setUserInput(e.currentTarget.innerText);
    //   setFocus(countries.length);
  };

  const suggestions = () => {
    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              //     let className;

              console.log('i', index, activeSuggestion);
              console.log('f', focus);
              // Flag the active suggestion with a class
              //      if (index === activeSuggestion) {
              //        className = "suggestion-active";
              //      }
              return (
                <Item
                  className="suggestion-active"
                  key={suggestion}
                  onClick={onClick}
                  onKeyDown={onKeyDown}
                  focus={focus === index}
                  index={index}
                  setFocus={setFocus}
                  suggestion={suggestion}
                />
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions available.</em>
          </div>
        );
      }
    }

    return suggestionsListComponent;
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={userInput} />
      {suggestions()}
      {error && <span>{error}</span>}
    </div>
  );
};

export default Autocomplete;
