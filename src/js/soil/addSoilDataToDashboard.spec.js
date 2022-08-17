/**
 * @jest-environment jsdom
 */

import addSoilDataRowToDashboard from './addSoilDataToDashboard';

document.body.innerHTML = `
   <table>
       <tbody class="table__body js-add-to-soilData-body">
       </tbody>
   </table>
   `;

describe('addSoilDataToDashboard', () => {
  it('creates row of soil data', () => {
    const expectedOutput = `
       <table>
         <tbody class="table__body js-add-to-soilData-body">
          <tr>
            <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Location</span>Providence, RI, USA</td>
            <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Soil Moisture (%)</span>35%</td>
            <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Soil Temperature (F)</span>68°F</td>
          </tr>
         </tbody>
       </table>
     `;
    addSoilDataRowToDashboard({ location: 'Providence, RI, USA', soilMoisture: 35, soilTemp: 68 });
    expect(document.body.innerHTML).toEqualHTML(expectedOutput);
  });
});
