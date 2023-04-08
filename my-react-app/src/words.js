export const words = [
	'speckled',
	'magic',
	'compel',
	'sappy',
	'patience',
	'strong',
	'incredulous',
	'bear',
	'league',
	'ahri',
	'apply',
	'books',
	'level',
	'room',
	'kitchen',
	'week',
	'response',
	'extent',
	'weakness',
	'philanthropic',
	'frame',
	'empower',
	'assumption',
	'child',
	'plastic',
	'clean',
	'success',
	'option',
];

export const getNextWord = (words) => {
	let indexCurrentNewWord = Math.floor(Math.random() * words.length);
	for (let i = 0; i < words.length; i++) {
		if (i === indexCurrentNewWord) return words[i];
	}
}
