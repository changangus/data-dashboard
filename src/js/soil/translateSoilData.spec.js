import MOCK_SOILS_DATA from '../../data/mockSoilsData.json';
import translateSoilData from './translateSoilData';

describe('translateSoilsData', () => {
  it('returns object with soil moisture and soil temp', () => {
    const { data } = MOCK_SOILS_DATA;
    const mockInput = { soilData: data, location: 'Davis, CA' };
    expect(translateSoilData(mockInput)).toStrictEqual({
      soilMoisture: '22.33',
      soilTemp: '73.31',
      location: 'Davis, CA',
    });
  });
});
