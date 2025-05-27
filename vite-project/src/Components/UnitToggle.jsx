import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const UnitToggle = () => {
  const { unit, setUnit } = useContext(WeatherContext);

  const toggleUnit = () => {
    setUnit((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    <button onClick={toggleUnit}>
      Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
    </button>
  );
};

export default UnitToggle;