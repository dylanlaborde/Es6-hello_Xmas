"use strict";

document.getElementById("val").addEventListener("click", function () {
	hello();
});
var person = undefined;
var mytab = [];

var hello = function hello(person) {

	if (document.getElementById("nom").value === "") {
		person = "Père Noël";
	} else {
		person = document.getElementById("nom").value;
	}

	var say = "Bonjour " + person;
	var insertSay = document.getElementById("sayIt").innerHTML = say;
	console.log(insertSay);
	console.log(say);
	mytab.push(say);
	console.log(mytab);
	// let test = document.createElement('li').innerHTML = mytab[i]
	// console.log(document.createElement('li')+ mytab.length)
	// document.getElementById("historique").appendChild(document.createElement('li')).innerHTML = mytab

	// document.getElementById("historique").innerHTML = mytab.length
	document.getElementById("nom").value = "";
	document.getElementById("historique").appendChild(document.createElement('li')).innerHTML = say;

	// for (var i = 0; i < mytab.length; i++) {
	// 	 console.log(mytab[i])
	//   document.getElementById("historique").appendChild(document.createElement('li')).innerHTML = mytab[i]
	//  // document.getElementById("historique")
	// 	// console.log(mytab.length -1)
	// }
};
