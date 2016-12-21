document.getElementById("resetSearch").addEventListener("click", ()=>{
	document.getElementById("resultSearch").innerHTML = ""
	console.log("lalalalal")
})

document.getElementById("valSearch").addEventListener("click", ()=>{
	document.getElementById("resultSearch").innerHTML = ""

	console.log(document.getElementById("search").value)
	console.log(mytab)
	var tableau = ["dylan", "rudy","arsene", "pere Noël" , "philipe" , "axel"]
		// if (document.getElementById("search").value === "") {
		// 	console.log("erreurs")
		// }
		var élément = document.getElementById("search").value
		

		for (var i = 0; i < mytab.length; i++) {
		if (mytab[i].indexOf(élément) === 0) {
			console.log(mytab[i]);
			document.getElementById("resultSearch").appendChild(document.createElement('li')).innerHTML = mytab[i];
		}
 		document.getElementById("search").value = ""
	}

	})

document.getElementById("val").addEventListener("click", ()=>{

	hello();
	console.log(mytab)
})



// --------->>> filtre a la premier letre (1 er methode utiliser)  --------->>>>>>>>>
// ---------->>>^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^----------->>>>>>>>

// document.getElementById("valSearch").addEventListener("click", ()=>{

// 	let valueSearch = document.getElementById("search").value
	
// 	console.log(mytab)
// 	for (var i = 0; i < mytab.length; i++) {
// 		let mytabFor = mytab[i]
// 		console.log(mytab[1][i])
// 		if (mytab[i][0] === valueSearch) {
// 			document.getElementById("resultSearch").appendChild(document.createElement('li')).innerHTML = mytab[i]


// 			console.log("yep trouver")
// 			console.log(i)
// 			console.log(mytab[i])
// 		}

// 		document.getElementById("search").value = ""

// 	}
// })
// ---------->>>^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^----------->>>>>>>>
// --------->>> filtre a la premier letre (1 er methode utiliser)  --------->>>>>>>>>
// ---------->>>^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^----------->>>>>>>>

let person = undefined
let mytab = ["dylan", "rudy","arsene", "pere Noël" , "philipe" , "axel"]
let mytabFor = undefined
let hello =(person)=>{
	if (document.getElementById("nom").value === "") {
		person = "Père Noël"
	}
	else{
		person = document.getElementById("nom").value

	}

	const say = `Bonjour ${person}` 
	const nom = `${person}` 
	const insertSay = document.getElementById("sayIt").innerHTML = say 
	
	mytab.push(nom)

	let historique = document.getElementById("historique")
	let li = document.createElement('li')

	historique.appendChild(li).innerHTML = nom

	
	document.getElementById("nom").value = ""
	

}


































