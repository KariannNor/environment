import joker from 'give-me-a-joke';

console.log('Intentional Error');

export function dadJoke() {
	return new Promise((resolve, reject) => {
		try {
			joker.getRandomDadJoke(joke => {
				resolve(joke);
			});
		} catch (error) {
			reject(error);
		}
	});
}
