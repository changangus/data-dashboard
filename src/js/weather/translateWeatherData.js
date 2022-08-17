import { getDayOfWeek } from '../utils';

const translateDailyWeatherData = (daily) => daily.reduce(
  (output, day) => [
    ...output,
    {
      dayOfWeek: getDayOfWeek(day.dt),
      temp: day.temp.day,
      humidity: day.humidity,
    },
  ],
  [],
);

const translateWeatherData = ({ dailyData, location }) => ({
  dailyData: translateDailyWeatherData(dailyData),
  location,
});

export default translateWeatherData;
