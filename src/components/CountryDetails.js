import React from 'react'; 
import Language from './Language';

const CountryDetails = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>

            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            
            <h2>languages</h2>
            <ul>
               {country.languages.map(language => 
                <Language key={language.iso639_1} language={language.name} />)}
            </ul>

            <img src={country.flag} alt="flag" height="150px" />
        </div>
    );
}

export default CountryDetails;