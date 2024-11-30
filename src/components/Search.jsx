import React, { useEffect, useState } from "react";

const Search = ({ onWeatherUpdate }) => {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchCities = async () => {
      if (query.trim() === "") {
        setCities([]);
        return;
      }

      try {
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?count=5&name=${encodeURIComponent(
            query,
          )}`,
        );
        const data = await response.json();
        setCities(data.results || []);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    const debounceTimer = setTimeout(fetchCities, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const fetchWeather = async () => {
    if (!selectedCity) {
      setError("Please select a city first!");
      return;
    }

    try {
      const { latitude, longitude } = selectedCity;
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m`
      );
      const data = await response.json();
      onWeatherUpdate({ "data": data, "city": selectedCity });
      setError("");
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Failed to fetch weather data. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    setError("");
    setQuery(e.target.value);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setQuery(city.name);
    setCities([]);
    setError("");

  };

  return (
    <div className="w-full max-w-md relative">
      <input
        type="text"
        placeholder="Enter city name..."
        className="w-full p-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        value={query}
        onChange={handleInputChange}
      />
      <button className="mt-4 w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md text-lg font-semibold"
        onClick={fetchWeather}
      >
        Search
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {cities.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md z-10 mt-2 max-h-80 overflow-y-auto">
          {cities.map((city) => (
            <li
              key={city.id}
              className="p-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => handleCitySelect(city)}
            >
              <img
                className="w-5 h-5"
                src={`https://open-meteo.com/images/country-flags/${city.country_code.toLowerCase()}.svg`}
                alt={city.country}
              />
              {city.name}, {city.admin1 ? `${city.admin1},` : ""} {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
