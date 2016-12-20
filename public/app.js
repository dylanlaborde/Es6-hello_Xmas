"use strict";

document.getElementById("val").addEventListener("click", function () {
	hello();
});
var person = undefined;
var mytab = ["Père Noël", "laal", "dylan", "bernard"];
var hello = function hello(person) {
	if (document.getElementById("nom").value === "") {
		person = "Père Noël";
	} else {
		person = document.getElementById("nom").value;
	}

	var say = "Bonjour " + person;
	var nom = "" + person;
	var insertSay = document.getElementById("sayIt").innerHTML = say;
	console.log(insertSay);
	console.log(say);
	console.log(mytab);
	mytab.push(nom);

	var historique = document.getElementById("historique");
	var li = document.createElement('li');

	historique.appendChild(li).innerHTML = nom;

	for (var i = 0; i < nom.length; i++) {

		console.log(nom[0]);
	}
	document.getElementById("nom").value = "";
	// document.getElementById("historique").appendChild(document.createElement('li')).innerHTML = nom

};
