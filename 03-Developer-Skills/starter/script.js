// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [
  5, 20,79,-2,12,86,43,2,21,78,98,12,"error",22,98, 65,56,
];

const temperatures2 = [
  5, 20,30,-2,12,75,21,2,21,78,120,12,"error",22,21, 32,56,
];


function calcTempAmplitude(t1, t2) {

  const mergedTemps = t1.concat(t2);

  let max = -Infinity;
  let min = Infinity;
  
  for (let i = 0; i < mergedTemps.length; i++) {

    if (typeof mergedTemps[i] !== 'number') {
        continue;

    } else {

      if (mergedTemps[i] > max) {
        max = mergedTemps[i]
      }
      if (mergedTemps[i] < min) {
        min = mergedTemps[i];
      }
        
    }
  }

  let amplitude = max - min;
  return [min, max, amplitude];

}


console.log(`The minimun and maximum temperatures, and the amplitude between them is: ${calcTempAmplitude(temperatures, temperatures2)}`);


