// 1-Write a function that takes a string as an input and returns the reverse of each letter
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o0l1l2e3h4"
 function reverse(str){
    var i = 1;
    var j = str.length - 2;
    var result = "";
    var l = 1;
    while(i < str.length) {
 	result = result + str.slice(j, -i) + l;
 	i++;
 	j--;
 	l++;
    }
 	return str.slice(str.length - 1) + 0 + result;
 }  	
    


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
 	
function arrlength(arr){
 	var i = 0;
 	var arr1 = [];
 	while( i < arr.length){
 		if(arr[i].length === arr[i + 1].length){
 			arr1.push(arr[i],arr[i + 1])
 		}
 		i++;
 		}
    return arr1;
}