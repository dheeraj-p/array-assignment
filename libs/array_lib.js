// Extract even and odd numbers from an array of numbers
exports.extractElements = function(numbers, type){
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
exports.sum = function(numbers){
  let result = 0;
  for(let number of numbers){
    result = result + number;
  }
  return result;
}

// Reverse the order of an array
exports.reverse = function(source){
  let result = [];
  for(let index = source.length -1; index >= 0; index--){
    result.push(source[index]);
  }
  return result;
}

// Extract every second element from an array
exports.extractAlternatingElements = function(elements){
  let extractedElements = [];
  for(let index = 0; index<elements.length; index += 2){
    extractedElements.push(elements[index]);
  }
  return extractedElements;
}

// Create fibonacci series upto given limit
exports.generateFibonacciSeries = function(numberOfTerms){
  let lastTerm = 1;
  let secondLastTerm = -1;
  let series = [];
  for(let count = 1; count <= numberOfTerms; count++){
    let currentTerm = lastTerm + secondLastTerm;
    series.push(currentTerm);
    lastTerm = currentTerm;
    secondLastTerm = lastTerm;
  }
  return series;
}
