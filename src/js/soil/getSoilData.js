import axios from 'axios';

const getSoilsData = async (lat, lng, location) => {
  const { data } = await axios.get(process.env.SOILS_API, {
    headers: {
      'x-api-key': process.env.AMBEE_API_KEY,
    },
    params: {
      lat,
      lng,
    },
  });
  return {
    soilData: data.data,
    location,
  };
};

export default getSoilsData;
