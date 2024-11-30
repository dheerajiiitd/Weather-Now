import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import WeatherReport from "./components/WeatherReport";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherDataUpdate = (weatherDataUpdate) => {
    setWeatherData(weatherDataUpdate);
  };

  return (
    <div className="flex flex-col items-center text-sky-900 mt-16">
      <Header />
      <Search onWeatherUpdate={handleWeatherDataUpdate} />
      {weatherData && <WeatherReport weatherData={weatherData} />}
    </div>
  );
}

export default App;
