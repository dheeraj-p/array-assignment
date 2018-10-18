const assert = require("assert");
const arrayLib = require("../libs/array_lib.js");

const {extractElements} = arrayLib;
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
