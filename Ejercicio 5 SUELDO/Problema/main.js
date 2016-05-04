function sueldo(){
	var h = parseInt(prompt("horas de trabajo"));
	var p = parseInt(prompt("pago por hora"));
	var total = 0;
	total = (h*p).toFixed(2);
	document.write(total);
}
sueldo();