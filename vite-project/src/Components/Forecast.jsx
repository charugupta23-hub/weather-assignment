import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const Forecast = () => {
  const { forecast, unit } = useContext(WeatherContext);

  if (!forecast) return null;

  const daily = forecast.list.filter((_, idx) => idx % 8 === 0).slice(0, 5);
  const unitSymbol = unit === 'metric' ? '°C' : '°F';

  return (
    <div>
      <h3>5-Day Forecast</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        {daily.map((item, i) => (
          <div key={i} style={{ border: '1px solid #ccc', padding: '8px' }}>
            <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="" />
            <p>{item.weather[0].main}</p>
            <p>{item.main.temp}{unitSymbol}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;