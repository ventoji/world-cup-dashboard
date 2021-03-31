import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import countries from './countries';
import './Autocomplete.css';

const Autocomplete = () => {
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const [filteredSuggestions, setFilteredSuggestions ] = useState([]);
    const [showSuggestions, setShowSuggestion] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [error, setError]= useState(false);
    const elemRefs = useRef();

    useEffect(() => {
        filteredSuggestions.forEach(opt => elemRefs[opt] ={current: null});
    },[filteredSuggestions]);

    useLayoutEffect(() => {
        console.log(elemRefs[filteredSuggestions[activeSuggestion]]);
        console.log(filteredSuggestions[activeSuggestion]);
       // elemRefs[filteredSuggestions[activeSuggestion]].current.scrollIntoView()
    },[filteredSuggestions,activeSuggestion]);

    const handleChange = (e) => {
        console.log(e.target.value);
        const userInput = e.target.value;
        const filteredSuggestions = countries.filter(
            suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        console.log(filteredSuggestions);
        setFilteredSuggestions(filteredSuggestions);
        setUserInput(userInput);
        setShowSuggestion(true);
    }

    const onKeyDown = e => {
        console.log(e.keyCode);
        if(e.keyCode === 13){
            setActiveSuggestion(0);
            setShowSuggestion(false);
            setUserInput(filteredSuggestions[activeSuggestion]);

        }else if(e.keyCode === 38){
            console.log('active',activeSuggestion);
            if(activeSuggestion === 0){
                return;
            }
            setActiveSuggestion(activeSuggestion-1);

        }else if(e.keyCode === 40){
            if(activeSuggestion -1 === filteredSuggestions.length){
                return;
            }
            setActiveSuggestion(activeSuggestion + 1);
        }
        // if (e.key === "ArrowDown") {
            
        //     if (activeSuggestion === filteredSuggestions.length - 1) return
        //     setActiveSuggestion(activeSuggestion + 1);
        //     console.log('ENTRA');
        //   }
        //   if (e.key === "ArrowUp") {
        //     if (activeSuggestion === 0) return
        //     setActiveSuggestion(activeSuggestion - 1);
        //     console.log('ENTRA');
        //   }
    }

    const onClick = e => {
    
        setActiveSuggestion(0);
        setFilteredSuggestions([]);
        setShowSuggestion(false);
        setUserInput(e.currentTarget.innerText);
        
      };

    const suggestions = () => {

        let  suggestionsListComponent;

        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
              suggestionsListComponent = (
                <ul class="suggestions">
                  {filteredSuggestions.map((suggestion, index) => {
                    let className;
          
                    // Flag the active suggestion with a class
                    if (index === activeSuggestion) {
                      className = "suggestion-active";
                    }
                    return (
                      <li 
                        className={className} 
                        key={suggestion} 
                        onClick={onClick}
                        tabIndex={index}
                        ref={elemRefs[activeSuggestion]}
                        >
                        {suggestion}
                      </li>
                    );
                  })}
                </ul>
              );
            } else {
              suggestionsListComponent = (
                <div class="no-suggestions">
                  <em>No suggestions available.</em>
                </div>
              );
            }
          }

          return suggestionsListComponent;
    }

    return (
        <div>
            <input 
                type="text"  
                onChange={handleChange}
                onKeyDown={onKeyDown}
                value={userInput}    
                />
          {suggestions()}
          {error && <span>{error}</span>}
        </div>
    );
};

export default Autocomplete;