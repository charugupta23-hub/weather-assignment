I started by breaking the app into small, manageable parts:

1. Context Setup – I used the Context API to manage shared state like the selected city and the weather data, so everything stays in sync no matter where it's used in the app.
2. SearchBar Component – This handles user input. When a user types a city and hits search (or presses Enter), it updates the context and triggers a fetch.
3. WeatherDisplay Component – This displays the weather data for the selected city. It updates whenever new data is fetched.
4. API Integration – I used `fetch()` to call the OpenWeatherMap API and handled loading and error states.
5. Styling – I kept it clean and minimal for now, just focusing on function over form. Might improve the styling later with Tailwind or CSS modules.
