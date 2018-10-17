const assert = require("assert");
const arrayLib = require("../libs/array_lib.js");

const {extractElements} = arrayLib;
const {generateFibonacciSeries} = arrayLib;
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
