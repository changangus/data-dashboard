import axios from 'axios';

const getAQIData = async (lat, lng, location) => {
  const {
    data: { stations },
  } = await axios.get(process.env.AQI_API, {
    headers: {
      'x-api-key': process.env.AMBEE_API_KEY,
    },
    params: {
      lat,
      lng,
    },
  });

  return {
    stations,
    location,
  };
};

export default getAQIData;
