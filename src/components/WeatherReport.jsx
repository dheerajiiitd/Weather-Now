import React from "react";

const WeatherReport = ({ weatherData }) => {
  console.log(weatherData);
  const current_weather = weatherData.data.current;
  const city = weatherData.city;
  return (
    <table className="w-8/12 mt-4 border border-gray-300 rounded-lg shadow-lg">
      <thead>
        <tr className="bg-blue-500">
          <th className="p-2">Property</th>
          <th className="p-2">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">City</td>
          <td className="p-2 border">{city.name}</td>
        </tr>
        <tr>
          <td className="p-2 border">State</td>
          <td className="p-2 border">{city.admin1}</td>
        </tr>
        <tr>
          <td className="p-2 border">Country</td>
          <td className="p-2 border">{city.country}</td>
        </tr>
        <tr>
          <td className="p-2 border">Latitude</td>
          <td className="p-2 border">{weatherData.data.latitude}°</td>
        </tr>
        <tr>
          <td className="p-2 border">Longitude</td>
          <td className="p-2 border">{weatherData.data.longitude}°</td>
        </tr>
        <tr>
          <td className="p-2 border">Elevation</td>
          <td className="p-2 border">{weatherData.data.elevation} m</td>
        </tr>
        <tr>
          <td className="p-2 border">Temperature</td>
          <td className="p-2 border">{current_weather.temperature_2m} °C</td>
        </tr>
        <tr>
          <td className="p-2 border">Relative Humidity</td>
          <td className="p-2 border">{current_weather.relative_humidity_2m}%</td>
        </tr>
        <tr>
          <td className="p-2 border">Wind Speed</td>
          <td className="p-2 border">{current_weather.wind_speed_10m} km/h</td>
        </tr>
        <tr>
          <td className="p-2 border">Wind Direction</td>
          <td className="p-2 border">{current_weather.wind_direction_10m}°</td>
        </tr>
      </tbody>
    </table>
  );
};

export default WeatherReport;
