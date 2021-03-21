

export const validateInputsWCField = (matchDetails) =>{
    const errors = {};
    const isValidAwayTeam = /^(?:[A-Za-z]+|\d+)$/.test(matchDetails.awayTeam);
    const isValidHomeTeam = /^(?:[A-Za-z]+|\d+)$/.test(matchDetails.homeTeam);

    if(!isValidAwayTeam) errors.awayteam = 'it can not contain numbers';
    if(!isValidHomeTeam) errors.hometeam = 'it can not contain numbers';

    if(matchDetails.homeTeam.toLowerCase()  === matchDetails.awayTeam.toLowerCase() ) errors.sameteams ='players should be different';
    
    return errors;

  }

  export const validateScoreWCfields = (field,value) => {
    const errors = {};

    console.log(Number.isInteger(parseInt(value)))
    if(!Number.isInteger(parseInt(value))) errors[field] = 'it should be a integer number';
 
    return errors;
  }

  export const validateCountries = (value,countries) => {
    const errors = {};
    if(!countries.includes(value.toLowerCase())) errors.countryname = 'should be a valid country name';

    return errors;
  }