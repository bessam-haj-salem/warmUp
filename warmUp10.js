// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd(a, b){
	if(a===b){           
		return a; // this is our stop condition 
	}
	else if (a > b){
		return gcd(a - b, b); // the function will call it self and decrement the value of a untill it reach 0 and return to the stop condition
	}
	else return gcd(a, b - a); // same thing here but b > a 
}

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

 function sum(a, b){
 	if(a === 0){
 		return b; // this is the stop condition in this case that the sum of 0 and b is b
 	}
 	else return sum(a - 1, b); // this function will call itself untill a is equal to 0 and return to the stop condition
 }
// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************
