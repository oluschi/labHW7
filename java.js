document.body.style.backgroundColor = " #dab3ff";
let z = document.getElementById("sixties");
let y = document.getElementById("sza");
let x = document.getElementById("fashion");
let b = document.getElementById("bio");


z.addEventListener("click", myFunction)
function myFunction() {
	sixties.classList.remove("transparent");
	fashion.classList.add("transparent");
	sza.classList.add("transparent");
	b.innerHTML = "I enjoy alot of the designs that came out of 60s and 70s";
	z.classList.add("one");
	document.body.style.backgroundColor = "#99bbff";
	document.getElementById("bio").style.fontFamily = "Lobster, cursive";
	
}

y.addEventListener("click", myFunction2)
function myFunction2() {
	sza.classList.remove("transparent");
	fashion.classList.add("transparent");
	sixties.classList.add("transparent");
	b.innerHTML = "My fav artist is SZA and I LOVE her CRTL Album!";
	y.classList.add("two");
	document.body.style.backgroundColor = "#bbff99";
	document.getElementById("bio").style.fontFamily = "Roboto Mono, monospace";
}

x.addEventListener("click", myFunction3)
function myFunction3() {
	fashion.classList.remove("transparent");
	sixties.classList.add("transparent");
	sza.classList.add("transparent");
	b.innerHTML = "If I wasn't a Comm Design Major, I would be in Fashion";
	x.classList.add("three");
	document.body.style.backgroundColor = "#ffbf80";
	document.getElementById("bio").style.fontFamily = "RocknRoll One', sans-serif";	
}