var date = new Date();

function JSClock() {
	date.toJSON();
}

function Hello() {
	alert("Hello World");
}

function onClick(projNum) {
	var p = document.getElementsByClassName("proj" + projNum);
	var proj = p[0];
	if (projNum == 1) {
		var text = "Created a Relational Database Management System (RDBMS) as a semester long project. Database stores fixed-length records using a B+ Tree. Methods such as sorted-scan, search, and range-scan are implemented. Uses a variety of join operators from Grace Hash Join to Sort-Merge Join with the optimal join choice chosen by a query optimizer. Developed in Java. Spring 2017."
	} else if (projNum == 2) {
		var text = "Created software that maps the area surrounding UC Berkeley. BearMaps utilizes the A-Star Algorithm to figure out the quickest path to take from one point in the city to another. Map is also able to perform functions such as zooming in/out and keeps the image resolution clean through a Quad-Tree. Developed in Java. Spring 2016"
	} else if (projNum == 3) {
		var text = "Created an image compressor using the Apache Spark Framework. Converts from RGB to YCrCb format and vice versa through matrix transformations to achieve crisp conversions of the format. Developed in Python. Fall 2016."
	}
	proj.innerHTML = text;
	proj.style.color = "black";
	proj.style.opacity = "1";
}

function turnOff(projNum) {
	var p = document.getElementsByClassName("proj" + projNum);
	var proj = p[0];
	if (projNum == 1) {
		var text = "<h3>RDBMS</h3>";
	} else if (projNum == 2) {
		var text = "<h3>BearMaps</h3>";
	} else if (projNum == 3) {
		var text = "<h3>Image Compressor</h3>";
	}
	proj.innerHTML = text;
	proj.style.color = "green";
	proj.style.opacity = "0.8";
}
