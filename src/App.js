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



  const searchResults = search && (countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase())).length > 10) 
    ? "Too many matches, specify another filter" 
    : search && (countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase())).length > 1) 
      ? countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase())) 
        : search && (countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase())).length == 1) 
          ? countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase())) 
          : '';
      

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
          {searchResults}
      </div>
    </div>
  );
}

export default App;
