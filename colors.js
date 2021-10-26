const colors = [
	'#FFFFFF',
	'#2196F3',
	'#4CAF50',
	'#FF9800',
	'#009688',
	'#795548',
 ];
 
 const refs = {
	startBtn: document.querySelector('[data-action="start"]'),
	stopBtn: document.querySelector('[data-action="stop"]'),
 };
 
 refs.startBtn.addEventListener('click', start);
 refs.stopBtn.addEventListener('click', stop);
 
 let id;
 
 const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
 };
 
 function random() {
	const random = randomIntegerFromInterval(0, colors.length - 1);
	document.body.style.backgroundColor = colors[random];
 }
 
 function start() {
	id = setInterval(random, 1000);
	refs.startBtn.disabled = true;
 }
 
 function stop() {
	refs.startBtn.disabled = false;
	clearInterval(id);
 }