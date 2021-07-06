import React, {useState, useEffect} from 'react';
import axios  from 'axios';


const Weather = ({ country }) => {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    const params = {
        access_key: process.env.REACT_APP_API_KEY,
        query: country.capital
      }
      
    axios
      .get('http://api.weatherstack.com/current', {params})
      .then(response => {
        setWeather(response.data);
      }).catch(error => {
        console.log(error);
      });
  }, [country.capital]);

  return (
      <>
        <h2>Weather in {country.name}</h2>
        <div><strong>temperature </strong>{weather?.current?.temperature ? weather.current.temperature : ''} celsius</div>
        <img src={weather?.current?.weather_icons ? weather.current.weather_icons : ''} alt="current weather" height="100px" />
        <div><strong>wind</strong> {weather?.current?.wind_speed ? weather.current.wind_speed : ''} mph direction {weather?.current?.wind_dir ? weather.current.wind_dir : ''} </div>
        <br />
      </>
  )
}

export default Weather;