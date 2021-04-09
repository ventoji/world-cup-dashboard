import React, { useState, useEffect } from 'react';
import options from './countries';
import './autocomplete2.css';

const Autocomplete2 = () => {
  const [activeOption, setActiveOption] = useState(4);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    setShowOptions(userInput);
    setFilteredOptions([
      ...options.filter(
        (option) => option.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
      ),
    ]);
    setActiveOption(0);
  }, [userInput]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      if (activeOption === filteredOptions.length - 1) return;
      setActiveOption(activeOption + 1);
    }
    if (e.key === 'ArrowUp') {
      if (activeOption === 0) return;
      setActiveOption(activeOption - 1);
    }
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <ul className="options">
          {showOptions &&
            filteredOptions.map((option, i) => (
              <li className={activeOption === i ? `option-active` : ``} key={i}>
                {option}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Autocomplete2;
