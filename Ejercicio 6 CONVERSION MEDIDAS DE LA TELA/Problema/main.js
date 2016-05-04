function telas(){
	var m = parseInt(prompt("metros de tela"));
	var p = 0.0254;
	var total =0;
	total = (m/p).toFixed(2);
	document.write(total);
}
telas();