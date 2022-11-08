let add7 = (a) => a + 7;

function capitalize(string){
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function lastLetter(string1){
	return string1.slice(-1);
}

function fizzbuzz(){
	let answer = parseInt(document.getElementById('input_value').value);

	for (let i = 1; i <= answer; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
		  } else if (i % 3 === 0) {
			console.log("Fizz");
		  } else if (i % 5 === 0) {
			console.log("Buzz");
		  } else {
			console.log(i);
		  }
	}
}