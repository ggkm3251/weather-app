'use client';

import { useState } from 'react';

export default function WeatherSearch() {
  const [city, setCity] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [weather, setWeather] = useState<any>(null);

  const fetchWeather = async () => {
    const res = await fetch(`http://localhost:8000/api/weather?city=${city}`);
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <input
        type="text"
        className="input input-bordered w-full"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="btn btn-primary w-full" onClick={fetchWeather}>
        Search
      </button>

      {weather && (
        <div className="card p-4 shadow-lg bg-base-100">
          <h2 className="text-xl font-bold">{weather.name}</h2>
          <p>🌡 Temp: {weather.main.temp}°C</p>
          <p>☁️ {weather.weather[0].description}</p>
          <p>💨 Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}
