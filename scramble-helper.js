// Create a function that reverses a word

function reverseWord(word) {
	let newWord = '';
	let i = word.length;
	while (i >= 0) {
		let newLetter = word.charAt(i);
		newWord = newWord + newLetter;
		i -= 1;
	}
	return newWord;
}

console.log(reverseWord('palindrome'))

// Create a function that takes an array of words and returns a new array of the
// words with each word reversed.

function reverseArray(words) {
	let reversedWords = [];
	for (let word of words) {
		reversedWords.push(reverseWord(word));
	}
	return reversedWords
}

console.log(reverseArray(['hello', 'goodbye', 'tacocat']))

// Create a function that returns a random word from an array

function randomWord(words) {
	let index = Math.floor(Math.random() * words.length);
	return words[index];
}

console.log(randomWord(['hi', 'bye', 'yo', 'howdy', 'au revoir', 'adios']));

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

const greetings = ['hi', 'bye', 'yo', 'howdy', 'au revoir', 'adios'];
const revGreetings = reverseArray(greetings);
console.log(revGreetings);

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?




// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.



// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
