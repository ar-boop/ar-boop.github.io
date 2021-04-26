let changeIce = () => {
	let n = Math.floor(Math.random() * 3) + 1;
	let r = Math.floor(Math.random() * 100) + 1;
	let g = Math.floor(Math.random() * 100) + 1;
	let b = Math.floor(Math.random() * 100) + 1;

	let src = './ic' + n + '.png';
	document.getElementById('i1').src = src;
	console.log(src);
	document.getElementById('h1').innerHTML =
		'Here!! have another iceCream!!! 😋';
	document.createElement('h1');
	let newOne = document.createElement('h1'); // Create a <button> element
	newOne.innerHTML = 'I want another one!!! 😁'; // Insert text
	newOne.setAttribute('id', 'an');
	document.body.appendChild(newOne);
	document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
};
