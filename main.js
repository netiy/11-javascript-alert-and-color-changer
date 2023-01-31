const form = document.querySelector("#input");
const btn = document.querySelector("#btn");
const btnChangeColor = document.querySelector("#btn-change-color");

btn.addEventListener("click", () => {
	console.log(form.value);
	alert(form.value);
});

btnChangeColor.addEventListener("click", () => {
	const colors = [
		"red",
		"orange",
		"yellow",
		"green",
		"blue",
		" darkblue",
		"purple",
	];
	document.body.style.backgroundColor = colors[Math.floor(Math.random() * 6)];
});
