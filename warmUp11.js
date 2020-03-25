// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors

var namesClass = [ { 
	names of females : 	[Ranoua, wala, Emna, Reem, Amal],
	names of males : [Ahamed, Hamza, Brahim, youssef],
	names of instructors : [dhia, farouk, jihed, houda, insaf, hachem]
	}
];
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
 var arr1 = [];
 function locMiddle(arr){
 	
 	if( arr.length % 2 !== 0){
 		return arr[(arr.length - 1)/2];
 	}
 	else return arr1.push(arr[(arr.length/2) - 1], arr[(arr.length/2)]);
 }

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
const changeArray =(arr)  => arr.map(x => x * 2);