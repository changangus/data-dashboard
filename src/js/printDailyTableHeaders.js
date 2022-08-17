import { getDayOfWeek, MAX_DAYS } from './utils';

const createDayTableHeader = (weekday) => `<th class="table__header--cell" scope="col">${weekday}</th>`;

export const printDailyTableHeaders = (date) => {
  let timeStamp = date / 1000;
  for (let i = 0; i < MAX_DAYS; i += 1) {
    const weekday = getDayOfWeek(timeStamp);
    const dailyTableHeaders = document.querySelectorAll('.js-add-to-daily-header');
    dailyTableHeaders.forEach((node) => node.insertAdjacentHTML('beforeend', createDayTableHeader(weekday)));
    timeStamp += 86400;
  }
};
