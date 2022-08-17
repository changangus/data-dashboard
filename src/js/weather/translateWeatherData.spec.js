import MOCK_WEATHER_DATA from '../../data/mockOpenWeatherData.json';
import translateWeatherData from './translateWeatherData';

describe('translateWeatherData', () => {
  it('returns an array of objects with temp and humidity data for each day of the week', () => {
    const { daily } = MOCK_WEATHER_DATA;
    const mockInput = { dailyData: daily, location: 'Davis, CA' };
    expect(translateWeatherData(mockInput)).toStrictEqual({
      dailyData: [
        { dayOfWeek: 'Thursday', temp: 87.3, humidity: 61 },
        { dayOfWeek: 'Friday', temp: 94.62, humidity: 40 },
        { dayOfWeek: 'Saturday', temp: 96.19, humidity: 38 },
        { dayOfWeek: 'Sunday', temp: 99.01, humidity: 31 },
        { dayOfWeek: 'Monday', temp: 96.46, humidity: 38 },
        { dayOfWeek: 'Tuesday', temp: 95.63, humidity: 39 },
        { dayOfWeek: 'Wednesday', temp: 99.28, humidity: 32 },
        { dayOfWeek: 'Thursday', temp: 89.51, humidity: 38 },
      ],
      location: 'Davis, CA',
    });
  });
});
