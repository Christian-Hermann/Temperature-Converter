function convertToCelsius(tempF) {
  const tempC = ((tempF - 32) * 5) / 9;
  return tempC;
}

const tempFah = 35;
const result = convertToCelsius(tempFah);
console.log(result);

function describeTemperature(tempC) {
  if (tempC < 0) {
    return "very cold";
  } else if (tempC < 20) {
    return "cold";
  } else if (tempC < 30) {
    return "warm";
  } else if (tempC < 40) {
    return "hot";
  } else {
    return "very hot";
  }
}

console.log(describeTemperature(20));

const tempF = prompt("Enter Fahrenheit temperature");

const tempC = convertToCelsius(tempF);

const temperature = describeTemperature(tempC);

alert(`${tempF} converts to ${tempC} which is ${temperature} I promise!`);
