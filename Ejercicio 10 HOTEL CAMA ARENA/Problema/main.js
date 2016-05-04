function hotel(){
	var d = parseInt(prompt("días que se queda"));
	var c = parseInt(prompt("costo por día"));
	var total = 0;
	total = (d*c).toFixed(2);
	document.write(total); 
}
hotel();