const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);

	// console.log('mathSymbol', mathSymbol);
    // console.log('num1', num1);
    // console.log('num2', num2);

	// addition commit
	if (mathSymbol === "+"){
		console.log(num1 + num2);
	};
	
	// subtraction commit
	if (mathSymbol === "-"){
		console.log(num1 - num2);
	};

	// multiplication commit
	if (mathSymbol === "*"){
		console.log(num1 * num2);
	};

	// division commit
	if (mathSymbol === "/"){
		console.log(num1 / num2);
	};

	// square root commit
	if (mathSymbol === "&"){
		console.log(Math.sqrt(num1));
	};
	// This line closes the connection to the command line interface.
	reader.close();

});
