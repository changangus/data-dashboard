const aqiTableRow = ({ location, aqi }) => `
  <tr>
    <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Location</span>${location}</td>
    <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">AQI</span>${aqi}</td>
  </tr>
`;

const addAqiRowToTableBody = (data) => {
  const aqiTableBody = document.querySelector('.js-add-to-aqi-body');
  aqiTableBody.insertAdjacentHTML('beforeend', aqiTableRow(data));
};

export default addAqiRowToTableBody;
