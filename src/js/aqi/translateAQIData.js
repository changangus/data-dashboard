const translateAQIData = ({ stations, location }) => ({
  aqi: stations[0].AQI,
  category: stations[0].aqiInfo.category,
  location,
});

export default translateAQIData;
