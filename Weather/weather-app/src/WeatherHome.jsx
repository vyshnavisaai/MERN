import React, { useState, useEffect } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdFoggy } from "react-icons/md";

import { FaSun, FaCloud, FaCloudRain, FaBolt, FaSnowflake, FaCloudShowersHeavy, FaSearchLocation } from 'react-icons/fa';
import './WeatherHome.css';

function WeatherHome() {
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState('London'); 
  const apiKey = "25f13becc6264d0c7039293ccd61d52b";

  const weatherIcons = {
    'Clear': <FaSun />,
    'Clouds': <FaCloud />,
    'Rain': <FaCloudRain />,
    'Thunderstorm': <FaBolt />,
    'Snow': <FaSnowflake />,
    'Mist': <FaCloudShowersHeavy />,
    'Fog': <MdFoggy/>
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        setWeatherData(data);
        console.log(weatherData);
      } catch (error) {
        console.error('Error fetching weather data:', error.message);
        setWeatherData(null);
      }
    };

    fetchData(); 

  }, [search, apiKey]);

  const getWeatherIcon = () => {
    if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
      const weatherCondition = weatherData.weather[0].main;
      const icon = weatherIcons[weatherCondition];
      return icon ? React.cloneElement(icon, { style: { fontSize: '2em' } }) : null;
    }
    return null;
  };

  return (
    <div id='body'>
      <br />
      <center>
        <div>
          <div style={{ display: 'flex' }}>
          <p>
              <FaLocationDot id='search' />
            </p>
            <p>
              <input
                id='searchbox'
                className='searchbox'
                type="text"
                placeholder="Enter city name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </p>
            
          </div>
        </div>
        <div id='body2'>
          <br />
        {weatherData && weatherData.main && (
          <>
            <p id='location'>{weatherData.name}</p>
            <p id='icon'>{getWeatherIcon()}</p>
            <p id='climate'>
              <span id='degree'>{weatherData.main.temp}°C <br /></span> {weatherData.weather[0].description}
            </p>
            <p id='climate2'>Humidity : {weatherData.main.humidity} % <br />Wind : {weatherData.wind.speed} mph</p>
            <br />
          </>
        )}
        </div>
      </center>
      <br />
    </div>
  );
}

export default WeatherHome;
