import { COLORS } from '../utils';

const labels = [];
const cityAqi = [];

const data = {
  labels,
  datasets: [{
    axis: 'y',
    label: 'AQI',
    data: cityAqi,
    fill: false,
    backgroundColor: COLORS,
  }],
};

const aqiConfig = {
  type: 'bar',
  data,
  options: {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

const addAqiDataToCharts = (chart, aqiData) => {
  labels.push(aqiData.location);
  cityAqi.push(aqiData.aqi);
  chart.update();
};

export {
  aqiConfig,
  addAqiDataToCharts,
};
