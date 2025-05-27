import React, { createContext, useState, useEffect } from 'react';
import { fetchWeatherData, fetchForecastData } from '../utils/api';
export const WeatherContext=createContext()
export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(localStorage.getItem('lastCity') || '');
  const [unit, setUnit] = useState('metric');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState('');

  const getWeather = async (selectedCity = city) => {
    try {
      setError('');
      const data = await fetchWeatherData(selectedCity, unit);
      const forecastData = await fetchForecastData(selectedCity, unit);
      setWeather(data);
      setForecast(forecastData);
      localStorage.setItem('lastCity', selectedCity);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast(null);
    }
  };

  useEffect(() => {
    if (city) getWeather(city);
    const interval = setInterval(() => {
      if (city) getWeather(city);
    }, 30000);
    return () => clearInterval(interval);
  }, [city, unit]);

  return (
    <WeatherContext.Provider value={{ city, setCity, unit, setUnit, weather, forecast, getWeather, error }}>
      {children}
    </WeatherContext.Provider>
  );
};