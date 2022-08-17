const renderWeatherDataUnit = (dataType) => (dataType === 'temp' ? '°F' : '%');

const createWeatherDataCell = (day, data, dataType) => `
  <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">${day}</span>${data}${renderWeatherDataUnit(dataType)}</td>
`;

const createWeatherDataRow = ({ dailyData, location }, dataType) => `
  <tr>
    <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Location</span>${location}</td>
    ${dailyData.map((day, index) => (index < 5
    ? createWeatherDataCell(day.dayOfWeek, day[dataType], dataType)
    : '')).join('')}
  </tr>
`;

const addWeatherDataToDashboard = (data, dataType) => {
  const humidityTableBody = document.querySelector(`.js-add-to-${dataType}-body`);
  humidityTableBody.insertAdjacentHTML('beforeend', createWeatherDataRow(data, dataType));
};

export default addWeatherDataToDashboard;
