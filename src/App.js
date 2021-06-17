import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data);
      });
  }, []);

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  const currentCountriesList = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()));

  // const searchResults = search && currentCountriesList.length > 10
  //   ? "Too many matches, specify another filter" 
  //   : search && currentCountriesList.length > 1
  //     ? currentCountriesList
  //       : search && currentCountriesList.length === 1 
  //         ? currentCountriesList
  //         : '';


      

  return (
    <div>
      <div>
        find countries
          <input 
            value={search}
            onChange={handleSearchChange}
          />
      </div>
      <div>
        {/* {searchResults.map(search => 
          <Search key={search.name} search={search} />)} */}
          {/* {searchResults} */}
          {search && currentCountriesList.length > 10 ? "Too many matches, specify another filter" : 
            search && currentCountriesList.length > 1 ? currentCountriesList.map(country => <Search key={country.name} search={country} /> ) : 
              search && currentCountriesList.length === 1 ? JSON.stringify(currentCountriesList) : 
                ''}
      </div>
    </div>
  );
}

export default App;
