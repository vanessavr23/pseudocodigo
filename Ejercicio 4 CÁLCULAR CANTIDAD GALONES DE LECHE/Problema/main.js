function galones(){
	var l = parseInt(prompt("litros de leche"));
	var g = 3.785;
	var total = 0;
	total = (l/g).toFixed(2);
	document.write(total);
}
galones();