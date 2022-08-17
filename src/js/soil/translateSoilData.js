const formatSoilData = (data) => data.toFixed(2);

const convertCelsiusToFarentheit = (temp) => {
  const f = (temp * (9 / 5)) + 32;
  return f;
};

const translateSoilData = ({ soilData, location }) => ({
  soilTemp: formatSoilData(convertCelsiusToFarentheit(soilData[0].soil_temperature)),
  soilMoisture: formatSoilData(soilData[0].soil_moisture),
  location,
});

export default translateSoilData;
