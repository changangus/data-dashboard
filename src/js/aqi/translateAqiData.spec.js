import MOCK_AQI_DATA from '../../data/mockAQIData.json';
import translateAQIData from './translateAQIData';

describe('translateAQIData', () => {
  it('returns object with AQI and category', () => {
    const { stations } = MOCK_AQI_DATA;
    const mockInput = { stations, location: 'Davis, CA' };
    expect(translateAQIData(mockInput)).toStrictEqual({
      aqi: 60,
      category: 'Moderate',
      location: 'Davis, CA',
    });
  });
});
