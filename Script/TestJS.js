function f(evt, name) {
	var i, links, contents;
	links = document.getElementsByClassName("button");
	for(i = 0; i < links.length; i++) {
		links[i].className = links[i].className.replace(" active", "");
	}
	contents = document.getElementsByClassName("content");
	for(i = 0; i < contents.length; i++) {
		contents[i].style.display = "none";
	}
	document.getElementById(name).style.display = "block";
	evt.currentTarget.className += " active";
}