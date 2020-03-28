// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array.
//For example:

// array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
// array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
// array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

function isSubset(array1,array2){
	var result = 0;
	for(var i = 0; i < array1.length; i++){
		for(var j = 0 ; j < array2.length; j++){ // we must do a counteur inside a counteur so he can scan first all the elements of array with one element of the subarray and splice it after
			if(array1[i] === array2[j]){
				result = true;
				array2.splice(j,1); // splice and go to the next element 

			}
			else result = false;
		}
		result;
	}
	return result;
}

