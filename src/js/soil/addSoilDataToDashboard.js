const soilRow = ({ location, soilTemp, soilMoisture }) => `
<tr>
  <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Location</span>${location}</td>
  <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Soil Moisture (%)</span>${soilMoisture}%</td>
  <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Soil Temperature (F)</span>${soilTemp}°F</td>
</tr>
`;

const addSoilDataRowToDashboard = (data) => {
  const soilDataTableBody = document.querySelector('.js-add-to-soilData-body');
  soilDataTableBody.insertAdjacentHTML('beforeend', soilRow(data));
};

export default addSoilDataRowToDashboard;
