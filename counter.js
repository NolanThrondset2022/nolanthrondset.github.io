var count = 0;

function minus() {
	count = count - 1;
	document.getElementById("counter").innerHTML = count;
}

function plus() {
	count = count + 1;
	document.getElementById("counter").innerHTML = count;
}

document.getElementById("Minus").addEventListener("click", minus);
document.getElementById("Plus").addEventListener("click", plus);
