import React from 'react';
import Search from './Search';
import CountryDetails from './CountryDetails';

const SearchResults = ({ search }) => {
    let searchResults = '';

    if (search.length === 1) {
        searchResults = <CountryDetails country={search[0]} />;
    } else if (search.length <= 10) {
        searchResults = search.map(
            country => 
            <>
                <Search key={country.name} country={country} />

            </>)
    } else {
        searchResults = 'Too many matches, specify another filter';
    }

    return (
        <div>{searchResults}</div>
    );
}

export default SearchResults;