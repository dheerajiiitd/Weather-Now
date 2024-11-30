# Weather Now

**Weather Now** is a React-based web application that allows users to search for cities and view real-time weather conditions using the [Open-Meteo API](https://open-meteo.com/en/docs). The app provides a clean and responsive user interface to display weather details like temperature, wind speed, humidity, and more.

---

## Features

- **City Search**: Search for cities using an input box that queries the Open-Meteo Geocoding API.
- **Dropdown Suggestions**: Displays a dropdown with city suggestions including country flags and administrative details.
- **Weather Report**: Fetches and displays detailed weather data for the selected city.
- **Responsive Design**: Adapts to both desktop and mobile screens for a seamless user experience.

### Weather Details Displayed
- City Name, State, and Country
- Latitude, Longitude, and Elevation
- Temperature
- Relative Humidity
- Wind Speed and Wind Direction

---

## Technologies Used

- **Frontend**: React
- **Styling**: Tailwind CSS
- **APIs**:
  - [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api) for city search.
  - [Open-Meteo Weather API](https://open-meteo.com/en/docs) for weather data.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-now.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-now
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open the application in your browser.
2. Enter a city name in the search bar at the center of the page.
3. As you type, a dropdown will appear with suggested cities matching your input. Each suggestion includes:
   - City name
   - Administrative region (if available)
   - Country name with its flag
4. Select a city from the dropdown. The selected city will populate the input field.
5. Click the "Search" button to fetch the weather data for the selected city.
6. View the detailed weather report in a table format, including:
   - City details: name, state, country, latitude, longitude, and elevation
   - Weather details: temperature, relative humidity, wind speed, and wind direction


## Project Structure

```plaintext
src/
├── components/
│   ├── Header.jsx           # Displays the app's title and description
│   ├── Search.jsx           # Handles city search and dropdown functionality
│   ├── WeatherReport.jsx    # Displays weather details in a table format
├── main.jsx                 # Route app component
├── App.jsx                  # Main app component
└── index.css                # Global styling
└── index.html               # Global html
```

## API Integration

### Geocoding API
- **Endpoint**: `https://geocoding-api.open-meteo.com/v1/search`
- **Parameters**:
  - `name`: City name to search for.
  - `count`: Number of results to return (default is 5).

### Weather API
- **Endpoint**: `https://api.open-meteo.com/v1/forecast`
- **Parameters**:
  - `latitude`: Latitude of the selected city.
  - `longitude`: Longitude of the selected city.
  - `current`: Comma-separated list of weather variables (`temperature_2m`, `relative_humidity_2m`, `wind_speed_10m`, `wind_direction_10m`).

---

## Future Improvements

- Add a map feature to display the selected city's location using `Leaflet.js`.
- Include hourly and weekly weather forecasts in addition to current weather data.
- Add a "Favorite Cities" feature to save frequently searched cities for quick access.
- Implement dark mode for better user experience during night usage.
- Optimize API calls by caching results to reduce network requests and improve performance.
- Enhance error handling with detailed messages for network issues or invalid queries.

