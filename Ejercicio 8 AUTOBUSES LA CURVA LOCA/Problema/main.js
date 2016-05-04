function costo(){
	var k = parseInt(prompt("kilometros por recorrer"));
	var c = parseInt(prompt("costo por kilometros"));
	var total = 0;
	total = (k*c).toFixed(2);
	document.write(total);
}
costo();