// 1) Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// ex greaterNum(5, 10) => "The greater number of 5 and 10 is 10."

<<<<<<< HEAD
function greaterNum(a, b){
	if(a > b){
		return "the greater number of " + a + ' ' +'and ' + ' ' + b + ' ' + 'is ' + a ;
		 }
	return "the greater number of " + a + ' ' +'and ' + ' ' + b + ' ' + 'is ' + b ;
 }	 


=======
>>>>>>> eedf4d1da29beb7f6472f832fb846002ed7197b5

// 2) Write a function named isEven using  for loop that
// -  iterate from x to y.
// -  return array contain the even values,
//  ex:  isEven(1,10) => [2,4,6,8,10]
 var array = [];
 var array1 = [];
 function isEven(x, y) {
 	
 	for( var i = 0 ; i < y ; i++){
 		array1 = arr[x,x+1];

 	}
 	return array1;
 }


<<<<<<< HEAD

// }
=======
>>>>>>> eedf4d1da29beb7f6472f832fb846002ed7197b5
//3) write a function named sum that
// - Use a while loop to add up the numbers from x to y.
// ex sum(1,5) => 15
 var result = 0;
  function sum(a ,b){
 	while( a <= b ){
 		result = result + a;
 		a++;
 		
 	}
 	return result;
 }



//4) Write a function named factorial that
// -  Use Recursion to calculate the factorial of a number
// -  the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n
// - 5! = 5*4*3*2*1 = 120
// ex : factorial(5) => 120
function factoriel(n){
	if(n === 0 || n ===1){
		return 1;
	}
	return n * factoriel(n-1);
	 }
	

//5) write a function named decimals
//- the function will format a number up to specified decimal places
//- the function will return a string
//- if the parameters not a number return false
// ex :
//      decimals(2100, 'a') ==> false
//      decimals('a', 5) ==> false
//      decimals(2.100212, 2) ==> '2.10'
//      decimals(2.100212, 3) ==> '2.100'
//      decimals(2100, 2) ==> '2100.00'
//
