function zeroFuel(distanceToPump, mpg, fuelLeft) {
  return mpg * fuelLeft >= distanceToPump;
}

function sumArray(array) {
  if (!array || array.length <= 2) return 0;
  array = array.sort((a, b) => a - b);
  return array.slice(1, -1).reduce((a, b) => a + b, 0);
}

function doubleChar(str) {
  return str.split('').map(x => x + x).join('');
}

function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((a, b) => a + b, 0);
}

function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}