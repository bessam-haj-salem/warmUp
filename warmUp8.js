// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']

function objKey(obj){
	var arr = [];
 arr = Object.keys(obj);
 return arr;
}

// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2
function objLength(obj){
	var arr =[];
	arr = Object.keys(obj);
return arr.length;

}

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]
function objSort(arr){
	var arr1 =[];
	for (var i = arr[0]["id"] ; i < arr.length ; i++){
		if (arr[i]["id"] < arr[i + 1]["id"]){
			return arr1.push(arr[i]);
		}
		else return arr1.push(arr[i + 1]);
	}
	return arr1;

}
