"use strict";

var hello = function hello(person) {
	if (document.getElementById("nom").value === "") {
		person = "Père Noël";
		console.log("empty");
	} else {
		person = document.getElementById("nom").value;
	}
	document.getElementById("sayIt").innerHTML = 'Bonjour ' + person;
	console.log('Bonjour ' + person);
};
document.getElementById("val").addEventListener("click", function () {
	hello();
});
