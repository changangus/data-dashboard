import axios from 'axios';

const getWeatherData = async (lat, lng, location) => {
  const { data: { daily } } = await axios.get(
    `${process.env.WEATHER_API}lon=${lng}&lat=${lat}&exclude=hourly,minutely&units=imperial&appid=${process.env.OPEN_WEATHER_API_KEY}`,
  );

  return {
    dailyData: daily,
    location,
  };
};

export default getWeatherData;
