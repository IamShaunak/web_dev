// var a ;
// a=10;
// console.log(a);
// var x;
// x=6;
// console.log(x);
// if(x == undefined)
// {
// 	console.log("Variabble is not initilised");
// }
// function neww(){

// 	return{
// 		name: "Shaunak"
// 	};
// }
// console.log(neww());

// var sum = 0;
// for(var i=0; i<=9;i++)
// {
// 	console.log(i)
// 	sum= i+sum;
// 	console.log("Sum=" + sum);
// }

//** OBJECT  CREATION METHOD-1  **//
// var company = new Object();
// company.name = "DSSWorld";
// company.name.owner = "Mak";
// console.log(company);
// console.log(company ["name"]);

//** previous code **//

//** OBJECT  CREATION METHOD-2  **//
var company = {
	name: "Dssworld",
	ceo: {
		firstname: "MAk",
		favcolor: "blue"
	},
	 $stock: 110,
	"stock of company": 190

};
console.log(["stock of company"]);
console.log(company);
console.log("Name of the CEO of "+company.name+" is "
	+company.ceo.firstname);

//function-factory//
// function multiply(x,y){
// 	return x*y;
// }
// multiply.version = "v.1.0.0";
// console.log("Current version: "+ multiply.version);
// console.log("Methodology of fnc multiply is: "+ multiply);

// function makemultiplier(multiplier){
// 	var myfunc = function(x){
// 		return multiplier*x;
// 	};
// 	return myfunc;
// }
// var multiplyby3 = makemultiplier(3);
// console.log(multiplyby3(10));
// var double = makemultiplier(2);
// console.log(double(90));

// //pasiing function as an argument
// function dooperration(x,operation){
// 	return operation(x);
// }
// var result = dooperration(5, multiplyby3);
// console.log(result); 
// var result1 = dooperration(5, double);
// console.log(result1); 
//** functions **//

//COPYING BY VALUE//
var a = 9;
var b = a;
console.log(a);
console.log(b);
b = 55;
console.log("a = "+a)
console.log("b = "+b)

//COPYING BY REFERENCE//
var a = {x:7};
var b = a;
console.log(a);
console.log(b);

b.x = 77; //THIS WILL CHANGE THE VALUE OF THE PROPERTY X, HENCE BOTH a AND b VALUE WILL CHANGE
console.log("After updating b.x")
console.log(a);
console.log(b);

//PASS BY VALUE
function change(number){
	console.log("In the function change");
	console.log(number);

	number = 77;
	console.log(number);
}
var value = 19;
change(value);
console.log(value);

//PASS BY REFERENCE
function changeobj(value){
	console.log("in function changeobj");
	console.log(value);

	value.x = 12;
	console.log("after");
	console.log(value);
}
value = {x: 7};
changeobj(value);
console.log("after passing to function");
console.log(value);

//** OBJECT  CREATION METHOD-3  **//
function Circle (radius) {
	// body...
	this.radius = radius
	this.getArea =
	function(){
		return Math.PI * Math.pow(this.radius, 2);
	};
}
var dssw = new Circle(30);
console.log(dssw);
console.log(dssw.getArea());

//Closuers
function multiply(argument) {
	// body...
	return{
		function (x) {
			// body...
			return argument * x;
		}
	};
}
var d = multiply();
console.log(d);//unfinished

// NAMESPACES
	//body..

// IIFE - Immediately Invoked Function Expression
(function adding(argument) {
	// body...
	console.log(argument+10);
	console.log("The paramenter passed to this IIFE is: "+ argument);
})(9);

// DOCUMent Object Manipulation (DOM)
	// body...
	
document.addEventListener("DOMContentLoaded",

	function(event) {
		function sayHello(event) {
		// body...
		console.log(event)
		this.textContent = "Said it";
		var name = document.getElementById("name").value;
		var msg = "Hello " + name + "!";

		document
		.getElementById("content")
		.textContent = msg;

		if (name === "shaunak"){
			 var title = document.querySelector("h1").textContent;

			 title += " and nothing";

			 document.querySelector("#title").textContent = title;

		}	
	}
	document.querySelector("button")
	.addEventListener("click", sayHello);

	document.querySelector("body")
	.addEventListener("mousemove",
		function (event) {
			if(event.shiftKey === true){
				console.log("X: "+event.clientX);
			console.log("Y: "+event.clientY);
			}
			}
		);	

	//function to create title
	// function create_title () {
	// 	// body...
	// 	console.log(this)
	// 	this.textContent = "ENTERED";
	// 	var text = document.getElementById("input").value;
	// 	var t = "<h2>The Title is " + text + "</h2>"

	// 	document.getElementById("heading").innerHTML = t;
	// }
	// document.getElementById("button")
	// .addEventListener("click", create_title);	

	}
	);
// const request = require('request');
//   request('http://stackabuse.com', function(err, res, body) {  
//       console.log(body);
//   });

  // AJAX:
 document.addEventListener("DOMContentLoaded",
 		function (event){

 			// Unobstrusive event binding
 			document.querySelector("button").addEventListener("click", function () {
 				var self = this;
 				var name = "";

 				$ajaxUtils
 				.sendGetRequest("/data/name.txt",
 					function (request) {
 						self.name = request.responseText;
 						console.log(self.name);
 					});

 				document.querySelector('#content')
 								.innerHTML = "<h2>Hello "+ self.name + "!";
 			});
 		}
 	); 
document.addEventListener("DOMContentLoaded",
		function(event){
			var mailid = document.getElementById("center").value();
			console.log(mailid)
		}
	);