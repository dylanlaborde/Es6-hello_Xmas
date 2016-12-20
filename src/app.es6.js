
	// for (var i = 0; i < mytab.length; i++) {
	// 	let mytabFor = mytab[i]
	// 	 // console.log(mytab[i].nom)
	// 	 console.log(mytab[i])
	// 	 console.log(i)
	// 	 console.log(mytabFor[0]);
	// 	 // if (true) {}
	// }

	document.getElementById("clear").addEventListener("click", ()=>{
		console.log("clear")
		document.getElementById("resultSearch").innerHTML = ""
	})

	document.getElementById("val").addEventListener("click", ()=>{

		hello();
		console.log(mytab)
	})

	document.getElementById("valSearch").addEventListener("click", ()=>{
		let valueSearch = document.getElementById("search").value
	// console.log(valueSearch)
	console.log(mytab)
	for (var i = 0; i < mytab.length; i++) {
		let mytabFor = mytab[i]
		console.log(mytabFor.length)
		 // console.log(mytab[i].nom)
		 console.log(mytab[i][i])



		 console.log(valueSearch)
		 // console.log()
		 if (mytab[i][0] === valueSearch) {
		 	// document.getElementById("resultSearch").innerHTML = mytab
		 	// document.getElementById("resultSearch").innerHTML = mytab[i]
		 	document.getElementById("resultSearch").appendChild(document.createElement('li')).innerHTML = mytab[i]

		 	// document.getElementById("resultSearch").innerHTML = mytab[i]
		 	console.log("yep trouver")
		 	console.log(i)
		 	console.log(mytab[i])
		 }
		  // else if (mytab[i][0] !== valueSearch) {
		  // 		console.log("")
		 	//  // document.getElementById("resultSearch").innerHTML = "Aucun resultat !"
		  // }


		}
	})

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
	// console.log(insertSay)
	// console.log(say)
	// console.log(mytab)
	mytab.push(nom)

	let historique = document.getElementById("historique")
	let li = document.createElement('li')

	historique.appendChild(li).innerHTML = nom

	for (var i = 0; i < nom.length; i++) {

		// console.log(nom[i])
	}
	



	document.getElementById("nom").value = ""

	// document.getElementById("historique").appendChild(document.createElement('li')).innerHTML = nom



}


































