import { Chart } from 'chart.js';

// CONSTANTS:

export const MAX_NUM_OF_CITIES = 5;
export const MAX_DAYS = 5;
export const COLORS = ['rgb(75, 192, 192, 0.5)', 'rgba(61, 252, 112, 0.5)', 'rgb(252, 15, 51, 0.5)', 'rgb(255, 255, 43, 0.5)', 'rgb(255, 148, 66, 0.5)'];

// UTIL FUNCTIONS:

export const getDayOfWeek = (timestamp) => {
  const a = new Date(timestamp * 1000);
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[a.getDay()];
};

export const addLabels = (date, array) => {
  let timeStamp = date / 1000;
  for (let i = 0; i < MAX_DAYS; i += 1) {
    const weekday = getDayOfWeek(timeStamp);
    array.push(weekday);
    timeStamp += 86400;
  }
};

export const insertChart = (elementId, config) => new Chart(
  document.getElementById(elementId).getContext('2d'),
  config,
);
