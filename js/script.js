let repetir = true
while(repetir) {
	let nombre = prompt("Ingrese su nombre completo")
		document.write("Hola " + nombre + "<br>")
	let localidad = prompt("Ingrese donde vive")
		document.write("Usted vive en " + localidad + "<br>")
	let edad = parseInt(prompt("Ingrese su edad en numeros "))
		document.write("Usted tiene " + edad + " años" + "<br>")	
	let respuesta = prompt("Antes de enviar la declaración jurada, ¿Desea volver a modificar los datos? ")
	
	if(respuesta == "no"){
	repetir = false
	alert ("Declaración jurada enviada exitosamente")
}

}