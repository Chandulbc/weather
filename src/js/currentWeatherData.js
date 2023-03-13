export const currentWeatherData = async (data, key) => {
  const currentWeatherIcon = document.querySelector(".current-weather-icon");
  const currentWeatherTemperature = document.querySelector(".current-weather-temperature");
  const currentWeatherDescription = document.querySelector(".current-weather-description");
  const currentLocation = document.querySelector(".current-location");
  const currentDate = document.querySelector(".current-date");

  const windSpeedValue = document.querySelector(".wind-speed-value");
  const pressureValue = document.querySelector(".pressure-value");
  const sunriseValue = document.querySelector(".sunrise-value");
  const humidityValue = document.querySelector(".humidity-value");
  const visibilityValue = document.querySelector(".visibility-value");
  const sunsetValue = document.querySelector(".sunset-value");

  let API_URL;

  if (data.lat && data.lon) {
    API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${key}&units=metric`;
  } else {
    API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${key}&units=metric`;
  }

  const response = await fetch(API_URL);
  const currentWeatherData = await response.json();

  currentWeatherIcon.src = `img/animated/${currentWeatherData.weather[0].icon}.svg`;
  currentWeatherTemperature.innerHTML = `${currentWeatherData.main.temp}°C`;
  currentWeatherDescription.innerHTML = currentWeatherData.weather[0].description;
  currentLocation.innerHTML = currentWeatherData.name;
  currentDate.innerHTML = currentWeatherData.dt;

  windSpeedValue.innerHTML = `${currentWeatherData.wind.speed} meter/sec`;
  pressureValue.innerHTML = `${currentWeatherData.main.pressure} hPa`;
  sunriseValue.innerHTML = currentWeatherData.sys.sunrise;
  humidityValue.innerHTML = `${currentWeatherData.main.humidity}%`;
  visibilityValue.innerHTML = `${currentWeatherData.visibility} meter`;
  sunsetValue.innerHTML = currentWeatherData.sys.sunset;
};
