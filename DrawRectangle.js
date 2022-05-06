function main(){
	//draws a small grey rectagles across the bottom of picture
	var canvas = document.getElementById("example");
	if(!canvas){
		console.log("failed to retrieve the <canvas> element");
		return;
	} // if no canvas
	//retrieve render for context
	var ctx = canvas.getContext("2d");
	//set fill to gradient
	var gradient = ctx.createLinearGradient(135,206,235,0);
	ctx.fillStyle = gradient;
	gradient.addColorStop("0.75","#6EC1F8");
	gradient.addColorStop("0.25", "#8E8E8E");
	//draw filled rectangle under picture
	ctx.fillRect(100,25,95,45);
	ctx.scale(3,3);
	ctx.fillRect(100,25,95,45);
	ctx.scale(2,2);
	ctx.fillRect(100,25,95,45);

}



