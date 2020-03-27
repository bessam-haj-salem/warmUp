// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n
//starting from 0, e.g.:
// mult(3); // => 6
// mult(4); // => 24
function mult(n){
	var result = 1; // we can't begin with 0 because its a multiplication 
 	for(var i = 0; i < n ; i++){
 		result = result * (n - i); // we increment i so we have each time n * (n - 1) * (n - 2) * ... * (n - (n -1))
 	}
 	return result;

 }

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number.
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...
 function repeat(n){
 	var result = ""; // we initialise the result by a string type so we have a string result 
 	var i = 1;
 	var j = 1; // we begin with 1 for i and j  so we can add the 1 after because we have 1 22 and not 11 22
 	while ( i < n && j < n ){ 
 		i++; // we need here two counters so we can have this repetition 11 22 etc
 		j++;
 		result = result + ' ' + i + ' ' + j;  
 	}
 	return  1 + result; // here we add the 1 
 }