import { addLabels, COLORS } from '../utils';

const labels = [];
const tempDatasets = [];

addLabels(new Date().getTime(), labels);

const data = {
  labels,
  datasets: tempDatasets,
};

const tempConfig = {
  type: 'line',
  data,
};

const addDailyTempToChart = (chart, weatherData) => {
  const tempArray = weatherData.dailyData.map((day) => day.temp);
  const city = weatherData.location;
  tempDatasets.push({
    label: city,
    data: tempArray,
    fill: false,
    borderColor: COLORS[tempDatasets.length],
    tension: 0.2,
  });
  chart.update();
};

export {
  tempConfig,
  addDailyTempToChart,
};
