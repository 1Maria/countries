import React from 'react'; 
import Language from './Language';

const CountryDetails = ({ search }) => {
    console.log("Friday", search)
    return (
        <div>
            <h1>{search.name}</h1>

            <div>capital {search.capital}</div>
            <div>population {search.population}</div>
            
            <h2>languages</h2>
            <ul>
               {search.languages.map(language => 
                <Language key={language.iso639_1} language={language.name} />)}
            </ul>

            <img src={search.flag} alt="flag" height="150px" />
        </div>
    );
}

export default CountryDetails;