import { getNumberOfDaysInBSMonth } from './common';
import { CalenderData } from '../Config'; // Corrected import path

describe('getNumberOfDaysInBSMonth for BS Year 2082', () => {
  const expectedDaysIn2082BS = {
    1: 30,  // Baisakh
    2: 31,  // Jestha
    3: 32,  // Asar
    4: 32,  // Shrawan
    5: 31,  // Bhadra
    6: 30,  // Asoj
    7: 30,  // Kartik
    8: 29,  // Mangsir
    9: 29,  // Poush
    10: 30, // Magh
    11: 29, // Falgun
    12: 30  // Chaitra
  };

  it('should return the correct number of days for each month in 2082 BS', () => {
    for (let month = 1; month <= 12; month++) {
      const year = 2082;

      if (month === 2) { // Specifically for Jestha
        console.log("Testing Jestha (Month 2) for year 2082");
        console.log("bsMonthCalculatedData[1] from CalenderData:", JSON.stringify(CalenderData.bsMonthCalculatedData[1]));
        console.log("bsMonthMaxDays[1] from CalenderData:", JSON.stringify(CalenderData.bsMonthMaxDays[1]));
        console.log("minBSYear from CalenderData:", CalenderData.minBSYear);
      }

      const calculatedDays = getNumberOfDaysInBSMonth({ year, month });

      if (month === 2) { // Specifically for Jestha
        console.log("Calculated days for Jestha 2082:", calculatedDays);
      }

      const expected = expectedDaysIn2082BS[month]; // Fully simplified
      expect(calculatedDays).toBe(expected);
    }
  });
});
