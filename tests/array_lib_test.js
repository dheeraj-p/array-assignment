const assert = require("assert");
const arrayLib = require("../libs/array_lib.js");

const {extractElements} = arrayLib;
const {unique} = arrayLib;
const {extractDigits} = arrayLib;
const {isInAscendingOrder} = arrayLib;
const {isInDescendingOrder} = arrayLib;
const {countNumbersByThreshold} = arrayLib;
const {isSmaller} = arrayLib;
const {indexOf} = arrayLib;
const {isGreater} = arrayLib;
const {countOdd} = arrayLib;
const {countEven} = arrayLib;
const {mapLengths} = arrayLib;
const {calculateAverage} = arrayLib;
const {extractElement} = arrayLib;
const {generateFibonacciSeries} = arrayLib;
const {generateReversedFibSeries} = arrayLib;
const {extractAlternatingElements} = arrayLib;
const {reverse} = arrayLib;
const {sum} = arrayLib;

//------------------------------Test for extractElements()
const testExractElements = function(input, type, expectedOutput){
  assert.deepEqual(extractElements(input, type), expectedOutput);
}

testExractElements([],"even", []);
testExractElements([],"odd", []);
testExractElements([1],"odd", [1]);
testExractElements([1],"even", []);
testExractElements([2],"even", [2]);
testExractElements([1,2,3,4,43],"odd", [1,3,43]);
testExractElements([1,2,3,4,43,3,543,6,3,3,2],"even", [2,4,6,2]);

//-------------------------------Sum of Numbers

assert.equal(sum([]), 0);
assert.equal(sum([1]), 1);
assert.equal(sum([1,2]), 3);
assert.equal(sum([-1,1]), 0);
assert.equal(sum([-1,2,1]), 2);
assert.equal(sum([1,2,3,4,5,-5,2,4]), 16);

//-------------------------------Reverse an array

const testReverse = function(input, expectedOutput){
  assert.deepEqual(reverse(input), expectedOutput);
}

testReverse([],[]);
testReverse([1],[1]);
testReverse([1,2],[2,1]);
testReverse([1,3,5,2],[2,5,3,1]);

//------------------------------Alternating elements

const testAlternatingElements = function(input, output){
  assert.deepEqual(extractAlternatingElements(input), output);
}

testAlternatingElements([],[]);
testAlternatingElements([1],[1]);
testAlternatingElements(["something"],["something"]);
testAlternatingElements([1,2,3],[1,3]);
testAlternatingElements([1,2,3,5,4,3,6],[1,3,4,6]);
testAlternatingElements(["s","o","m","e","t","h","i","n","g"],["s","m","t","i","g"]);

//------------------------------Fibonacci series

const testFibonacciSeries = function(input, output){
  assert.deepEqual(generateFibonacciSeries(input),output);
}

testFibonacciSeries(0,[]);
testFibonacciSeries(1,[0]);
testFibonacciSeries(2,[0,1]);
testFibonacciSeries(5,[0,1,1,2,3]);

//------------------------------Fibonacci series

const testReversedFibSeries = function(input, output){
  assert.deepEqual(generateReversedFibSeries(input),output);
}

testReversedFibSeries(0,[]);
testReversedFibSeries(1,[0]);
testReversedFibSeries(2,[1,0]);
testReversedFibSeries(5,[3,2,1,1,0]);

//------------------------------Greatest Number

const testGreatestNumber = function(input, expectedOutput){
  assert.equal(extractElement(input, Math.max), expectedOutput);
}

testGreatestNumber([], undefined);
testGreatestNumber([1], 1);
testGreatestNumber([1,2], 2);
testGreatestNumber([3,2,1], 3);
testGreatestNumber([3,2,1,45,99,-0], 99);

const testSmallestNumber = function(input, expectedOutput){
  assert.equal(extractElement(input, Math.min), expectedOutput);
}

testSmallestNumber([], undefined);
testSmallestNumber([1], 1);
testSmallestNumber([1,2], 1);
testSmallestNumber([3,2,1], 1);
testSmallestNumber([3,2,1,45,99,-0], 0);

//--------------------------------Calculate Average

const testAverage = function(input, expectedOutput){
  assert.equal(calculateAverage(input), expectedOutput);
}

testAverage([1], 1);
testAverage([0],0);
testAverage([1,2],1.5);
testAverage([4,2,10,20],9);
testAverage([1,2,10,20],8.25);

//--------------------------------Mapping length of string

const testMapping = function(input, expectedOutput){
  assert.deepEqual(mapLengths(input), expectedOutput);
}

testMapping([],[]);
testMapping([""],[0]);
testMapping(["a"],[1]);
testMapping(["a", "ab", "abc"],[1,2,3]);
testMapping(["a", "ab", "abc","", "something"],[1,2,3,0,9]);

//--------------------------------Count odd numbers

const testCountOdd = function(input, expectedOutput){
  assert.equal(countOdd(input), expectedOutput);
}

testCountOdd([],0);
testCountOdd([1],1);
testCountOdd([2],0);
testCountOdd([2,3,4],1);
testCountOdd([2,3,4,5,9,0],3);

//--------------------------------Count even numbers

const testCountEven = function(input, expectedOutput){
  assert.equal(countEven(input), expectedOutput);
}

testCountEven([],0);
testCountEven([1],0);
testCountEven([2],1);
testCountEven([2,3,4],2);
testCountEven([2,3,4,5,9,0],3);

//-------------------------------Count numbers above a threshold

const testCountAbove = function(input, threshold, expectedOutput){
  assert.equal(countNumbersByThreshold(input, threshold, isGreater), expectedOutput);
}

testCountAbove([],2,0);
testCountAbove([1],2,0);
testCountAbove([2],2,0);
testCountAbove([2,3],2,1);
testCountAbove([2,3,5,6,3,26,6,2,4,6],4,5);

//-------------------------------Count numbers below a threshold

const testCountBelow = function(input, threshold, expectedOutput){
  assert.equal(countNumbersByThreshold(input, threshold, isSmaller), expectedOutput);
}

testCountBelow([],2,0);
testCountBelow([1],2,1);
testCountBelow([2],2,0);
testCountBelow([2,3],2,0);
testCountBelow([2,3,5,6,3,26,6,2,4,6],4,4);

//-------------------------------Index of a element in array

const testIndexOf = function(input, element, expectedOutput){
  assert.equal(indexOf(element, input), expectedOutput);
}

testIndexOf([],2,-1);
testIndexOf([1],0,-1);
testIndexOf([2],2,0);
testIndexOf([2,3],3,1);
testIndexOf([2,3,5,6,3,26,6,2,4,6],4,8);
testIndexOf(["abc","bcd","def","feg"],"bcd",1);

//-------------------------------Check if a list is in ascending order or not

const testAscendingOrder = function(input, expectedOutput){
  assert.equal(isInAscendingOrder(input), expectedOutput);
}

testAscendingOrder([],true);
testAscendingOrder([1,2,3],true);
testAscendingOrder([2,1],false);
testAscendingOrder([2,2,3],true);
testAscendingOrder([2,3,5,6,3,26,6,2,4,6],false);
testAscendingOrder(["abc","bcd","def","feg"],true);
testAscendingOrder(["bcd","abc","def","feg"],false);

//-------------------------------Check if a list is in descending order or not

const testDescendingOrder = function(input, expectedOutput){
  assert.equal(isInDescendingOrder(input), expectedOutput);
}

testDescendingOrder([],true);
testDescendingOrder([3,2,1],true);
testDescendingOrder([2,1],true);
testDescendingOrder([2,2,3],false);
testDescendingOrder([2,3,5,6,3,26,6,2,4,6],false);
testDescendingOrder(["abc","bcd","def","feg"],false);
testDescendingOrder(["bcd","abc","def","feg"],false);

//------------------------------- Extract digits from a number

const testExtractDigits = function(input, expectedOutput){
  assert.deepEqual(extractDigits(input), expectedOutput);
}

testExtractDigits(1, [1]);
testExtractDigits(12, [1,2]);
testExtractDigits(13025, [1,3,0,2,5]);

//-------------------------------Extract unique elements

const testUnique = function(input, expectedOutput){
  assert.deepEqual(unique(input), expectedOutput);
}

testUnique([], []);
testUnique([1], [1]);
testUnique([1,2], [1,2]);
testUnique([1,1,3,0,1,2,4,5,5,1], [1,3,0,2,4,5]);
testUnique([1,1,1,1,1], [1]);
