// 1 - Complete the function cube that returns the cube of x:

function cube(x) {
   return x * x * x;
   // your code here
}

// 2 - Write a function sameLength that accepts two strings as arguments, and returns true if those strings have the same length, and false otherwise.

function sameLength(string1, string2) {
  if (string1.length > string2.length){
  return string1;}
  return string2;// your code here
}

// 3 - Write a function called scoreToGrade that accepts a number as a parameter and returns a string representing a letter grade corresponding to that score.


function scoreToGrade(number) {
	if( n < 60){
		return 'F'
	};
	else if (n > 60 && n < 62){ 
	    return 'D-'
	};
	
	else if (n > 63 && n < 66){ 
	    return 'D'
	};
	else if (n > 67 && n < 69){ 
	    return 'D+'
	};
	else if (n > 70 && n < 72){ 
	    return 'C-'
	};
	else if (n > 73 && n < 76){ 
	    return 'C'
	};
	else if (n > 77 && n < 79){ 
	    return 'C+'
	};
	else if (n > 80 && n < 82){ 
	    return 'B-'
	};
	else if (n > 83 && n < 86){ 
	    return 'B'
	};
	else if (n > 87 && n < 89){ 
	    return 'B+'
	};
	else if (n > 90 && n < 92){ 
	    return 'A-'
	};
	else return 'A'
	
  
}
// USE RECURSION
// Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string str should be repeated
// repeatString('dog', 0); // => ''
// repeatString('dog', 1); // => 'dog'
// repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog'
// repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'

var result = '';
function repeatString(str, count) {
    while(count > 0){

    	result = result + repeatString(str,count - 1);
    	count = count -1
    }
    return result;
}
