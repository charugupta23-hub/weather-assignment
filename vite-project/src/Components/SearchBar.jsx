import React, { useContext, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const SearchBar = () => {
  const { setCity, getWeather } = useContext(WeatherContext);
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (!input) return;
    setCity(input);
    getWeather(input);
    setInput('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;