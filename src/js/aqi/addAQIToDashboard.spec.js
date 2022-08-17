/**
 * @jest-environment jsdom
 */

import addAqiRowToTableBody from './addAQIToDashboard';

document.body.innerHTML = `
  <table>
      <tbody class="table__body js-add-to-aqi-body">
      </tbody>
  </table>
  `;

describe('addAQIToDashboard', () => {
  it('creates row of aqi data', () => {
    const expectedOutput = `
      <table>
        <tbody class="table__body js-add-to-aqi-body">
          <tr>
            <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Location</span>Providence, RI</td>
            <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">AQI</span>60</td>
          </tr>
        </tbody>
      </table>
    `;
    addAqiRowToTableBody({ aqi: 60, location: 'Providence, RI' });
    expect(document.body.innerHTML).toEqualHTML(expectedOutput);
  });
});
