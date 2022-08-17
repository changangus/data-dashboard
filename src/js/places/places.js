/* eslint-disable no-undef */
/* disabled no undefined variables because our file makes use of a object called 'google' which
is imported in a script tag in our html when the program loads in the browser */

import getAQIData from '../aqi/getAQIData';
import translateAQIData from '../aqi/translateAQIData';
import { addAqiDataToCharts } from '../aqi/aqiChart';
import { addSoilDataToChart } from '../soil/soilChart';
import { addDailyHumidityToChart } from '../weather/dailyHumidityChart';
import getSoilsData from '../soil/getSoilData';
import translateSoilData from '../soil/translateSoilData';
import translateWeatherData from '../weather/translateWeatherData';
import getWeatherData from '../weather/getWeatherData';
import { addDailyTempToChart } from '../weather/dailyTempChart';

let autocomplete;

const searchInput = document.querySelector('.search-form__input');

const onPlaceChange = (aqiChart, dailyHumidityChart, dailyTempChart, soilChart) => {
  const place = autocomplete.getPlace();

  if (!place.geometry) {
    searchInput.placeholder = 'Type location and select from dropdown';
  } else if (dailyTempChart.data.datasets.length >= 5) {
    // eslint-disable-next-line no-alert
    alert('Maximum number of cities reached, please reload.');
  } else {
    const location = place.formatted_address;
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    getAQIData(lat, lng, location)
      .then(translateAQIData)
      .then((data) => { addAqiDataToCharts(aqiChart, data); });
    getSoilsData(lat, lng, location)
      .then(translateSoilData)
      .then((data) => { addSoilDataToChart(soilChart, data); });
    getWeatherData(lat, lng, location).then(translateWeatherData).then((data) => {
      addDailyHumidityToChart(dailyHumidityChart, data);
      addDailyTempToChart(dailyTempChart, data);
    });

    searchInput.value = '';
  }
};

const setupPlacesAPI = (aqiChart, dailyHumidityChart, dailyTempChart, soilChart) => {
  const searchForm = document.querySelector('.search-form');

  const initAutocomplete = () => {
    autocomplete = new google.maps.places.Autocomplete(
      searchInput,
      {
        componentRestrictions: { country: ['US'] },
        fields: ['formatted_address', 'geometry'],
      },
    );

    autocomplete.addListener('place_changed', () => {
      onPlaceChange(aqiChart, dailyHumidityChart, dailyTempChart, soilChart);
    });
  };

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  global.window.initAutocomplete = initAutocomplete;
};

export default setupPlacesAPI;
