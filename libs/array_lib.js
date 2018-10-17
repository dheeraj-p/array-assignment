// Extract even and odd numbers from an array of numbers
const extractElements = function(numbers, type){
  let extractedElements = {even : [], odd : []};
  let types = ["even", "odd"];
  for(let number of numbers){
    let remainder = number % 2;
    let categoryOfNumber = types[remainder];
    extractedElements[categoryOfNumber].push(number);
  }
  return extractedElements[type];
}

// Calculate the result of numbers in an array
const sum = function(numbers){
  let result = 0;
  for(let number of numbers){
    result = result + number;
  }
  return result;
}

// Reverse the order of an array
const reverse = function(source){
  let result = [];
  for(let index = source.length -1; index >= 0; index--){
    result.push(source[index]);
  }
  return result;
}

// Extract every second element from an array
const extractAlternatingElements = function(elements){
  let extractedElements = [];
  for(let index = 0; index<elements.length; index += 2){
    extractedElements.push(elements[index]);
  }
  return extractedElements;
}

// Create fibonacci series upto given limit
const generateFibonacciSeries = function(numberOfTerms){
  let lastTerm = 1;
  let secondLastTerm = -1;
  let series = [];
  for(let count = 1; count <= numberOfTerms; count++){
    let currentTerm = lastTerm + secondLastTerm;
    series.push(currentTerm);
    secondLastTerm = lastTerm;
    lastTerm = currentTerm;
  }
  return series;
}

// Create a fibonacci series in reversed order
const generateReversedFibSeries = function(numberOfTerms){
  let series = generateFibonacciSeries(numberOfTerms);
  return reverse(series);
}

exports.extractElements = extractElements;
exports.sum = sum;
exports.reverse = reverse;
exports.extractAlternatingElements = extractAlternatingElements;
exports.generateFibonacciSeries = generateFibonacciSeries;
exports.generateReversedFibSeries = generateReversedFibSeries;
