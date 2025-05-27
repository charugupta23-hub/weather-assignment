const API_KEY='fe191a2c0c93333f9ec54d43c147c83b'

export const fetchWeatherData = async (city, unit) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`);
  if (!res.ok) throw new Error('City not found or API error');
  return res.json();
};

export const fetchForecastData = async (city, unit) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`);
  if (!res.ok) throw new Error('Forecast fetch error');
  return res.json();
};