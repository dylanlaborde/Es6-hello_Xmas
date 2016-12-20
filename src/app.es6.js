document.getElementById("val").addEventListener("click", ()=>{
	hello();
})
let person = undefined
let mytab = ["Père Noël", "laal", "dylan", "bernard"]
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
	console.log(insertSay)
	console.log(say)
	console.log(mytab)
	mytab.push(nom)

	let historique = document.getElementById("historique")
	let li = document.createElement('li')

	historique.appendChild(li).innerHTML = nom
	
	for (var i = 0; i < nom.length; i++) {

		console.log(nom[0])
	}
	document.getElementById("nom").value = ""
	// document.getElementById("historique").appendChild(document.createElement('li')).innerHTML = nom


}


















