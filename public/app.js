"use strict";

// for (var i = 0; i < mytab.length; i++) {
// 	let mytabFor = mytab[i]
// 	 // console.log(mytab[i].nom)
// 	 console.log(mytab[i])
// 	 console.log(i)
// 	 console.log(mytabFor[0]);
// 	 // if (true) {}
// }


document.getElementById("val").addEventListener("click", function () {

	hello();
	console.log(mytab);
});

document.getElementById("valSearch").addEventListener("click", function () {
	var valueSearch = document.getElementById("search").value;
	// console.log(valueSearch)
	console.log(mytab);
	for (var i = 0; i < mytab.length; i++) {
		var _mytabFor = mytab[i];
		// console.log(mytabFor.length)
		console.log(mytab[1][i]);

		// console.log(mytab[i].nom)
		// console.log(mytab[i][0])


		// console.log(valueSearch)
		// console.log()
		if (mytab[i][0] === valueSearch) {
			// document.getElementById("resultSearch").innerHTML = mytab
			// document.getElementById("resultSearch").innerHTML = mytab[i]
			document.getElementById("resultSearch").appendChild(document.createElement('li')).innerHTML = mytab[i];

			// document.getElementById("resultSearch").innerHTML = mytab[i]
			console.log("yep trouver");
			console.log(i);
			console.log(mytab[i]);
		}
		// else if (mytab[i][0] !== valueSearch) {
		// 		console.log("")
		//  // document.getElementById("resultSearch").innerHTML = "Aucun resultat !"
		// }
		document.getElementById("search").value = "";
	}
});

var person = undefined;
var mytab = ["dylan", "rudy", "arsene", "pere Noël", "philipe", "axel"];
var mytabFor = undefined;
var hello = function hello(person) {
	if (document.getElementById("nom").value === "") {
		person = "Père Noël";
	} else {
		person = document.getElementById("nom").value;
	}

	var say = "Bonjour " + person;
	var nom = "" + person;
	var insertSay = document.getElementById("sayIt").innerHTML = say;
	// console.log(insertSay)
	// console.log(say)
	// console.log(mytab)
	mytab.push(nom);

	var historique = document.getElementById("historique");
	var li = document.createElement('li');

	historique.appendChild(li).innerHTML = nom;

	for (var i = 0; i < nom.length; i++) {

		// console.log(nom[i])
	}

	document.getElementById("nom").value = "";

	// document.getElementById("historique").appendChild(document.createElement('li')).innerHTML = nom

};
