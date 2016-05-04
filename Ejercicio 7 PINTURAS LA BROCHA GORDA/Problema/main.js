function brocha(){
	var m2 = parseInt(prompt("metros cuadrados"));
	var p = parseInt(prompt("precio por metro2"))
	var total = 0;
	total = (m2*p).toFixed(2);
	document.write(total);
}
brocha();