import { useState, useEffect } from "preact/hooks";

interface Weather {
  temperature: number;
  windspeed: number;
  weathercode: number;
}

const weatherIcons: Record<number, string> = {
  0: "☀️",  // Ясне небо
  1: "🌤️",  // Переважно ясно
  2: "⛅",   // Частково хмарно
  3: "☁️",   // Хмарно
  45: "🌫️", // Туман
  48: "🌫️", // Льодовий туман
  51: "🌦️", // Дрібний дощ
  61: "🌧️", // Дощ
  71: "🌨️", // Снігопад
  95: "⛈️", // Гроза
};

const WeatherWidget = () => {
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&current_weather=true"
    )
      .then((response) => response.json())
      .then((data) => setWeather(data.current_weather));
  }, []);

  return (
    <div class="max-w-3xl mx-auto p-8 rounded-lg shadow-lg bg-gradient-to-br from-blue-500 to-teal-400 text-white">
      <h3 class="text-4xl font-bold text-center mb-6 md:hidden">Погода надворі</h3>
      {weather ? (
        <div class="md:flex md:items-center">
          {/* Іконка погоди ліворуч */}
          <div class="text-center text-9xl md:w-1/3 animate-jiggle md:scale-125">
            {weatherIcons[weather.weathercode] || "❓"}
          </div>

          {/* Деталі погоди праворуч */}
          <div class="space-y-6 text-center md:text-left md:w-2/3 md:pl-8">
            <p class="text-3xl font-semibold">
              Температура: {weather.temperature}°C
            </p>
            <p class="text-xl text-nowrap">Швидкість вітру: {weather.windspeed} км/год</p>
            <p class="italic text-xl hidden md:block">
              {weatherIcons[weather.weathercode]
                ? "Насолоджуйтесь погодою!"
                : "Невідомі умови"}
            </p>
          </div>
        </div>
      ) : (
        <p class="text-center text-xl">Завантаження...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
