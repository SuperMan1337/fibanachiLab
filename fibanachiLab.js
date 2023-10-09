'use strict'

function fibonacciCalc(n) {
  if (n <= 1)
    return n;
  else 
    return fibonacciCalc(n - 1) + fibonacciCalc(n - 2); //recursion  
}

var n = prompt("Position: ");
var result = fibonacciCalc(parseInt(n));
console.log("Number of : " + result);
alert(fibanacciCalc(6)); //8

