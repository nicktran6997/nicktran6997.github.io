var date = new Date();

function JSClock() {
	date.toJSON();
}

function Hello() {
	alert("Hello World");
}


function onClick(val, e) {
	var proj = document.getElementsByClassName("proj1")[0];
	console.log(e);
	if (val === 1) {
		proj.textContent = "Hello";
	}
	
}