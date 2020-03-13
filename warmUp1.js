// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here

function combine(firstname,lastname){
	return firstname + ' ' + lastname;
}

function multiple(n){
	if(n % 3 === 0){
		return 'this number is a multiple of 3';
        return 'this is not a multiple of 3';
	}
}
function average(array){
	
	var max = array[0];
	for( i = 0 ; i < array.length ; i++){
		if (max < arr[i]){
			max = arr[i];
		}

return max;

	}

}

function age(n){
   return n * 365 * 24 * 60 * 60;
   }
   