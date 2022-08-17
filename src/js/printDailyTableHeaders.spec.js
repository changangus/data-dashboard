/**
 * @jest-environment jsdom
 */

import { printDailyTableHeaders } from './printDailyTableHeaders';

document.body.innerHTML = `
   <table>
      <thead class="table__header">
        <tr class="js-add-to-daily-header">
          <th class="table__header--cell" scope="col">Location</th>
        </tr>
      </thead>
   </table>
   `;

describe('addAQIToDashboard', () => {
  it('creates row of aqi data', () => {
    const expectedOutput = `
       <table>
          <thead class="table__header">
            <tr class="js-add-to-daily-header">
              <th class="table__header--cell" scope="col">Location</th>
              <th class="table__header--cell" scope="col">Thursday</th>
              <th class="table__header--cell" scope="col">Friday</th>
              <th class="table__header--cell" scope="col">Saturday</th>
              <th class="table__header--cell" scope="col">Sunday</th>
              <th class="table__header--cell" scope="col">Monday</th>
            </tr>
          </thead>
       </table>
     `;
    console.log();
    printDailyTableHeaders(new Date('2021.10.07'));
    expect(document.body.innerHTML).toEqualHTML(expectedOutput);
  });
});
