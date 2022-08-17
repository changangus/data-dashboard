const cityLabels = [];
const soilMoisture = [];
const soilTemp = [];

const data = {
  labels: cityLabels,
  datasets: [{
    label: 'Soil Moisture (%)',
    data: soilMoisture,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
    ],
    borderWidth: 1,
  },
  {
    label: 'Soil Temp (F)',
    data: soilTemp,
    backgroundColor: [
      'rgba(100, 199, 132, 0.2)',
    ],
    borderColor: [
      'rgb(100, 199, 132)',
    ],
    borderWidth: 1,
  },
  ],
};

const soilConfig = {
  type: 'bar',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const addSoilDataToChart = (chart, soilData) => {
  cityLabels.push(soilData.location);
  soilMoisture.push(soilData.soilMoisture);
  soilTemp.push(soilData.soilTemp);
  chart.update();
};

export {
  soilConfig,
  addSoilDataToChart,
};
