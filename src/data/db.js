const AQI_DATA = require('./mockAQIData.json');
const SOILS_DATA = require('./mockSoilsData.json');
const WEATHER_DATA = require('./mockOpenWeatherData.json');

const setRoutes = () => ({
  aqi: AQI_DATA,
  soil: SOILS_DATA,
  weather: WEATHER_DATA,
});

module.exports = setRoutes;
