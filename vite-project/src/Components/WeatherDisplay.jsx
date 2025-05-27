import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
const WeatherDisplay = () => {
  const { weather, unit } = useContext(WeatherContext);

  if (!weather) return null;

  const { main, weather: details, wind, name } = weather;
  const iconUrl = `https://openweathermap.org/img/wn/${details[0].icon}@2x.png`;
  const unitSymbol = unit === 'metric' ? '°C' : '°F';

  return (
    <div>
      <h2>{name}</h2>
      <img src={iconUrl} alt={details[0].description} />
      <p>{details[0].main}</p>
      <p>Temperature: {main.temp}{unitSymbol}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
    </div>
  );
};

export default WeatherDisplay;