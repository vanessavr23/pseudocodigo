function llamada (){
	var m = parseInt(prompt("minutos"));
	var c = parseInt(prompt("costo por minuto"));
	var total = 0;
	total = (m*c).toFixed(2);
	document.write(total);
}
llamada();