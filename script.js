$(document).ready(function(){
	var numPixels = prompt("How many pixels/row?")
	addPixels(numPixels);
	pixelSize(numPixels);
	applyColor();

	$('button').click(function(){
		$('.pixel').detach();
		$('.pixel').removeClass('turned');
		newPixels = prompt("How many pixels now?");
		addPixels(newPixels);
		pixelSize(newPixels);
		applyColor();
	})

});

function addPixels(rowLength){
	var numPixels = rowLength * rowLength;
	for (var i=1; i<=numPixels; i++){
		$('#wrapper').append("<div class=\"pixel\"></div>");
	}
}

function pixelSize(numPixels){
	var pixelWidth = 480/numPixels;
	/*Math.round(pixelWidth);*/
	$('.pixel').width(pixelWidth);
	$('.pixel').height(pixelWidth);
}

function applyColor(){
	$('.pixel').mouseenter(function(){
		//$(this).toggleClass("turned");
		var opacity = $(this).css("opacity");
		$(this).css("opacity",opacity-0.1);
	})
}