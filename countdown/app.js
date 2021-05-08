const countdown = () => {
	const countDate = new Date('May 31, 2021 00:00:00').getTime();
	const now = new Date().getTime();
	const gap = countDate - now;

	const secs = 1000;
	const mins = secs * 60;
	const hours = mins * 60;
	const days = hours * 24;

	const textDay = Math.floor(gap / days);
	const textHours = Math.floor((gap % days) / hours);
	const textMins = Math.floor(((gap % days) % hours) / mins);
	const textSecs = Math.floor((((gap % days) % hours) % mins) / secs);

	document.querySelector('.days').innerText = textDay;
	document.querySelector('.hours').innerText = textHours;
	document.querySelector('.mins').innerText = textMins;
	document.querySelector('.secs').innerText = textSecs;
};

setInterval(countdown, 1000);
