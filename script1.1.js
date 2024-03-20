//Closures
// function makemultiplier(multiplier){
// 	var myfunc = function(x){
// 		return multiplier*x;
// 	};
// 	return myfunc;
// }
// var doubleAll = makemultiplier(2);
// console.log(doubleAll(10));

function makemultiplier (multiplier){
	return{
		function (x) {
			// body...
			return multiplier * x;
		}
	};
}
// var double = makeMultiplier(2);
// console.log(double(10));

function print(argument) {
	// body...
	return 3 + argument;
}
var p = print(10);
console.log(p);