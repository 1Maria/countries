import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchResults from './components/SearchResults';

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
        <SearchResults search={currentCountriesList} />
      </div>
    </div>
  );
}

export default App;
