import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addCountries } from '../store/actions/actions';

//   <p>data</p> {state && state.map((item,index) => <li key={index}> {item.name}</li>)}
const URL = 'https://restcountries.eu/rest/v2/all';

const CountriesAPI = ({ addCountries }) => {
  //    const [state, setState] = useState([])

  const fetchApi = () => {
    return axios(URL).then(({ data }) => {
      //         setState(data);
      addCountries(data);
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return <></>;
};

const mapDispatchToProps = (dispatch) => ({
  addCountries: (countries) => dispatch(addCountries(countries)),
});

export default connect(undefined, mapDispatchToProps)(CountriesAPI);

// export default CountriesAPI;
