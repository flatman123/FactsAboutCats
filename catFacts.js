//Create a program that choose a random fact about Cats.

function getFacts() {
	return new Promise((resolve, reject) => {
		const getData = fetch('https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts');
		resolve(getData).json();
		console.log('Application Successfully Completed!');
	})
};

const promise = getFacts();

.then(d => {
	d = d.json();
	return d;
})

.then(g => {
	let randomFact = Math.floor(Math.random(0) * g.all.length);
	console.log(g.all[randomFact].text);
})

.catch(() => {
	console.log('ERROR')
});

console.log('Application started...');
