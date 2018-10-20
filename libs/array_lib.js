// Extract even and odd numbers from an array of numbers
const extractElements = function(numbers, type){
  let extractedElements = {even : [], odd : []};
  let types = ["even", "odd"];
  for(let number of numbers){
    let remainder = Math.abs(number % 2);
    let typeOfNumber = types[remainder];
    extractedElements[typeOfNumber].push(number);
  }
  return extractedElements[type];
}

const isEven = function(number){
  return (number % 2 == 0);
}

const isOdd = function(number){
  return !isEven(number);
}

const extractEvenNumbers = function(numbers){
  return numbers.filter(isEven);
}

const extractOddNumbers = function(numbers){
  return numbers.filter(isOdd);
}

// Calculate the sum of two numbers
const sum = function(firstNumber, secondNumber){
  return firstNumber + secondNumber;
}

// Calculate the sum of numbers in an array
const addNumbers = function(numbers){
  return numbers.reduce(sum,0);
}

// Reverse the order of an array
const reverse = function(source){
  let reversed = source.reduce(function(result, element){
    result.unshift(element);
    return result;
  }, []);
  return reversed;
}

// Extract every second element from an array
const extractAlternatingElements = function(elements){
  return elements.filter(function(e, index){ 
    return index % 2 == 0;
  });
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
  const selectElement = function(firstElement, secondElement){
    return selector(firstElement, secondElement);
  }
  return numbers.reduce(selectElement);
}

// Calculate average of given numbers
const calculateAverage = function(numbers){
  let numberOfElements = numbers.length;
  return addNumbers(numbers)/numberOfElements;
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
  for(let number of numbers){
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
const isInSpecificOrder = function(list,comparator){
  for(let index = 0; index < list.length -1; index++){
    if(comparator(list[index],list[index +1])){
      return false;
    }
  }
  return true;
}

// Check whether if a list is in descending order or not
const isInDescendingOrder = function(list){
  return isInSpecificOrder(list, isSmaller);
}

// Check whether if a list is in ascending order or not
const isInAscendingOrder = function(list){
  return isInSpecificOrder(list, isGreater);
}

// Extract digits of a number into an array
const extractDigits = function(number){
  let digits = number.toString().split("");
  for(let index in digits){
    digits[index] = +digits[index];
  }
  return digits;
}

// Get all unique elements from an array

const unique = function(list){
  let result = [];
  for(let element of list){
    let isAlreadyPresent = result.includes(element);
    if(!isAlreadyPresent){
      result.push(element);
    }
  }
  return result;
}

// get Union set for two given sets
const union = function(firstSet, secondSet){
  let unionSet = firstSet.slice();
  for(let element of secondSet){
    unionSet.push(element);
  }
  return unique(unionSet);
}

//get Intersection set of two sets
const getIntersection = function(firstSet, secondSet){
  let intersectionSet = [];
  for(let element of firstSet){
    let isPresentInSecondSet = secondSet.includes(element);
    if(isPresentInSecondSet){
      intersectionSet.push(element);
    }
  }
  return unique(intersectionSet);
}

//get Difference of two sets
const getDifference = function(firstSet, secondSet){
  let differenceSet = [];
  for(let element of firstSet){
    let isPresentInSecondSet = secondSet.includes(element);
    if(!isPresentInSecondSet){
      differenceSet.push(element);
    }
  }
  return unique(differenceSet);
}

//Check if second set is proper subset of first set
const isSubset = function(superSet, subsetCandidate){
  for(let element of subsetCandidate){
    let isPresentInSuperSet = superSet.includes(element);
    if(!isPresentInSuperSet){
      return false;
    }
  }
  return true;
}

// Create a new array which contains the correspondig elements of two arrays as array
const zip = function(firstList, secondList){
  let result = [];
  let leastLength = Math.min(firstList.length, secondList.length);
  for(let index = 0; index < leastLength; index++){
    let zippedElements = [];
    zippedElements.push(firstList[index]);
    zippedElements.push(secondList[index]);
    result.push(zippedElements);
  }
  return result;
}

// Partition an array into to patitions consisting of elements below and above than given number
const partition = function(numbers, pivot){
  let result = [[],[]];
  for(let number of numbers){
    let indexToPushIn = 1;
    if(number <= pivot){
      indexToPushIn = 0;
    }
    result[indexToPushIn].push(number);
  }
  return result;
}

// Rotate array on a pivot index
const rotate = function(list, pivot){
  let result = list.slice();

  for(let iteration = list.length -1 ; iteration >= pivot; iteration--){
    let poppedElement = result.pop();
    result.unshift(poppedElement);
  }
  return result;
}

exports.rotate = rotate;
exports.calculateAverage = calculateAverage;
exports.partition = partition;
exports.zip = zip;
exports.isSubset = isSubset;
exports.getIntersection = getIntersection;
exports.getDifference = getDifference;
exports.union = union;
exports.unique = unique;
exports.extractDigits = extractDigits;
exports.isInAscendingOrder = isInAscendingOrder;
exports.isInDescendingOrder = isInDescendingOrder;
exports.indexOf = indexOf;
exports.countNumbersByThreshold = countNumbersByThreshold;
exports.countEven = countEven;
exports.isSmaller = isSmaller;
exports.isGreater = isGreater;
exports.countOdd = countOdd;
exports.mapLengths = mapLengths;
exports.extractEvenNumbers = extractEvenNumbers;
exports.extractOddNumbers = extractOddNumbers;
exports.addNumbers = addNumbers;
exports.reverse = reverse;
exports.extractAlternatingElements = extractAlternatingElements;
exports.generateFibonacciSeries = generateFibonacciSeries;
exports.extractElement = extractElement;
exports.generateReversedFibSeries = generateReversedFibSeries;
