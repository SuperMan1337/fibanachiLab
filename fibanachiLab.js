'use strict'

function fibonacciCalculation(n) {
  if (n <= 1)
    return n;
  else 
    return fibonacciCalculation(n - 1) + fibonacciCalculation(n - 2); //recursion  
}

var n = prompt("Position: ");
var result = fibonacciCalculation(parseInt(n));
console.log("Number of : " + result);
alert(fibanacciCalculation(6)); //8

