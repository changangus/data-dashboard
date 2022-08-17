/**
 * @jest-environment jsdom
 */

import addWeatherDataToDashboard from './addWeatherDataToDashboard';

describe('addDailyTempToDashboard', () => {
  beforeEach(() => {
    document.body.innerHTML = `
   <table>
       <tbody class="table__body js-add-to-temp-body">
       </tbody>
   </table>
   `;
  });

  it('creates row of temperature data', () => {
    const expectedOutput = `
       <table>
         <tbody class="table__body js-add-to-temp-body">
          <tr>
            <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Location</span>Davis, CA</td>
            <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Thursday</span>87.3°F</td>
            <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Friday</span>94.62°F</td>
            <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Saturday</span>96.19°F</td>
            <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Sunday</span>99.01°F</td>
            <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Monday</span>96.46°F</td>
          </tr>
         </tbody>
       </table>
     `;
    addWeatherDataToDashboard({
      dailyData: [
        { dayOfWeek: 'Thursday', temp: 87.3, humidity: 61 },
        { dayOfWeek: 'Friday', temp: 94.62, humidity: 40 },
        { dayOfWeek: 'Saturday', temp: 96.19, humidity: 38 },
        { dayOfWeek: 'Sunday', temp: 99.01, humidity: 31 },
        { dayOfWeek: 'Monday', temp: 96.46, humidity: 38 },
        { dayOfWeek: 'Tuesday', temp: 95.63, humidity: 39 },
        { dayOfWeek: 'Wednesday', temp: 99.28, humidity: 32 },
        { dayOfWeek: 'Thursday', temp: 89.51, humidity: 38 },
      ],
      location: 'Davis, CA',
    }, 'temp');
    expect(document.body.innerHTML).toEqualHTML(expectedOutput);
  });
});

describe('addDailyHumidityToDashboard', () => {
  beforeEach(() => {
    document.body.innerHTML = `
   <table>
       <tbody class="table__body js-add-to-humidity-body">
       </tbody>
   </table>
   `;
  });

  it('creates row of humidity data', () => {
    const expectedOutput = `
      <table>
        <tbody class="table__body js-add-to-humidity-body">
          <tr>
            <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Location</span>Davis, CA</td>
            <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Thursday</span>61%</td>
            <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Friday</span>40%</td>
            <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Saturday</span>38%</td>
            <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Sunday</span>31%</td>
            <td class="table__data-cell"><span class="table__data-cell--label" aria-hidden="true">Monday</span>38%</td>
          </tr>
        </tbody>
      </table>
    `;
    addWeatherDataToDashboard({
      dailyData: [
        { dayOfWeek: 'Thursday', temp: 87.3, humidity: 61 },
        { dayOfWeek: 'Friday', temp: 94.62, humidity: 40 },
        { dayOfWeek: 'Saturday', temp: 96.19, humidity: 38 },
        { dayOfWeek: 'Sunday', temp: 99.01, humidity: 31 },
        { dayOfWeek: 'Monday', temp: 96.46, humidity: 38 },
        { dayOfWeek: 'Tuesday', temp: 95.63, humidity: 39 },
        { dayOfWeek: 'Wednesday', temp: 99.28, humidity: 32 },
        { dayOfWeek: 'Thursday', temp: 89.51, humidity: 38 },
      ],
      location: 'Davis, CA',
    }, 'humidity');
    expect(document.body.innerHTML).toEqualHTML(expectedOutput);
  });
});
