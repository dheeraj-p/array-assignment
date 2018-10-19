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

// Find greatest number in a list
const extractElement = function(numbers, selector){
  let previousElement = numbers[0];
  for(let index = 1; index < numbers.length;index++){
    let currentElement = numbers[index];
    previousElement = selector(previousElement, currentElement);
  }
  return previousElement;
}

// Calculate average of given numbers
const calculateAverage = function(numbers){
  let numberOfElements = numbers.length;
  return sum(numbers)/numberOfElements;
}

// Map the lengths of strings in a source array.
const mapLengths = function(source){
  let lengths = [];
  for(let element of source){
    lengths.push(element.length);
  }
  return lengths;
}

// Count odd numbers in an array
const countOdd = function(numbers){
  let oddNumbers = extractElements(numbers, "odd");
  return oddNumbers.length;
}

// Count even numbers in an array
const countEven = function(numbers){
  let evenNumbers = extractElements(numbers, "even");
  return evenNumbers.length;
}

// Check if left operand is greater than right operand
const isGreater = function(leftOperand, rightOperand){
  return leftOperand > rightOperand;
}

// Check if left operand is smaller than right operand
const isSmaller = function(leftOperand, rightOperand){
  return leftOperand < rightOperand;
}

// Count numbers above threshold in an array
const countNumbersByThreshold = function(numbers, threshold, comparator){
  let count = 0;
  for(number of numbers){
    if(comparator(number, threshold)){
      count++;
    }
  }
  return count;
}

// Find the index of a given element in an array
const indexOf = function(element, list){
  let result = -1;
  for(let index = 0; index < list.length; index++){
    let isElementFound = (element == list[index]);
    if(isElementFound){
      result = index;
      return index;
    }
  }
  return result;
}

// Check whether if a list is in ascending order or not
const isInAscendingOrder = function(list){
  for(let index = 0; index < list.length -1; index++){
    if(list[index] > list[index +1]){
      return false;
    }
  }
  return true;
}

// Check whether if a list is in descending order or not
const isInDescendingOrder = function(list){
  for(let index = 0; index < list.length -1; index++){
    if(list[index] < list[index +1]){
      return false;
    }
  }
  return true;
}

exports.calculateAverage = calculateAverage;
exports.isInAscendingOrder = isInAscendingOrder;
exports.isInDescendingOrder = isInDescendingOrder;
exports.indexOf = indexOf;
exports.countNumbersByThreshold = countNumbersByThreshold;
exports.countEven = countEven;
exports.isSmaller = isSmaller;
exports.isGreater = isGreater;
exports.countOdd = countOdd;
exports.mapLengths = mapLengths;
exports.extractElements = extractElements;
exports.sum = sum;
exports.reverse = reverse;
exports.extractAlternatingElements = extractAlternatingElements;
exports.generateFibonacciSeries = generateFibonacciSeries;
exports.extractElement = extractElement;
exports.generateReversedFibSeries = generateReversedFibSeries;
