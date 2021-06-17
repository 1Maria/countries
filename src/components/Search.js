import React, { useState } from 'react';
import CountryDetails from './CountryDetails';

const Search = ({ country }) => {
    const [details, setDetails] = useState(false);

    const showButton = 
        <button onClick={() => setDetails(!details)}>
            show 
        </button>

    return (
        <div>
            {country.name} {showButton}
            {details ? <CountryDetails key={country.name} country={country} /> : ''}
        </div>
    );
}

export default Search;