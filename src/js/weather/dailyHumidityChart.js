import { addLabels, COLORS } from '../utils';

const labels = [];
const humidityDatasets = [];

addLabels(new Date().getTime(), labels);

const data = {
  labels,
  datasets: humidityDatasets,
};

const humidityConfig = {
  type: 'line',
  data,
};

const addDailyHumidityToChart = (chart, humidityData) => {
  const humidityArray = humidityData.dailyData.map((day) => day.humidity);
  const city = humidityData.location;
  humidityDatasets.push({
    label: city,
    data: humidityArray,
    fill: false,
    borderColor: COLORS[humidityDatasets.length],
    tension: 0.2,
  });
  chart.update();
};

export {
  humidityConfig,
  addDailyHumidityToChart,
};
