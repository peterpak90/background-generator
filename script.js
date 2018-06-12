var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomButton"); //note: for some reason, if randomButton was a class instead of id, this doesn't work

setGradient()

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
function randomColor() { 
	var hex = '0123456789ABCDEF'.split(''),
        color = '#', i;
    for (i = 0; i < 6 ; i++) {
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomGradient() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomGradient);




