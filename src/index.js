/* eslint-disable import/no-mutable-exports */
import './styles/index.scss';
import Chart from 'chart.js/auto';
import setupPlacesAPI from './js/places/places';
import { printDailyTableHeaders } from './js/printDailyTableHeaders';
import { aqiConfig } from './js/aqi/aqiChart';
import { insertChart } from './js/utils';
import { soilConfig } from './js/soil/soilChart';
import { tempConfig } from './js/weather/dailyTempChart';
import { humidityConfig } from './js/weather/dailyHumidityChart';

let aqiChart;
let soilChart;
let dailyTempChart;
let dailyHumidityChart;

Chart.defaults.font.size = 14;
Chart.defaults.color = '#fff';
Chart.defaults.borderColor = '#5c5c5c';

const main = async () => {
  printDailyTableHeaders(new Date().getTime());
  aqiChart = insertChart('aqiChart', aqiConfig);
  soilChart = insertChart('soilChart', soilConfig);
  dailyTempChart = insertChart('tempChart', tempConfig);
  dailyHumidityChart = insertChart('humidityChart', humidityConfig);
  setupPlacesAPI(aqiChart, dailyHumidityChart, dailyTempChart, soilChart);
};

main();
