import { useState } from 'react'
import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import SearchBar from './Components/SearchBar.jsx';
import WeatherDisplay from './Components/WeatherDisplay';
import './App.css'
import UnitToggle from './Components/UnitToggle.jsx';
import Forecast from './Components/Forecast.jsx';


function App() {
  return (
    <WeatherProvider>
      <div className="app">
        <h1>Weather Dashboard</h1>
        <SearchBar />
        <WeatherDisplay />
        <UnitToggle/>
        <Forecast/>

      </div>
    </WeatherProvider>
  );
}


export default App
