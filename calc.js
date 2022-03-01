const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate? (e.g. '+ 1 5') \n\n", function(input){
	tokens = input.split(' ');
	
	mathOperator = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	

	console.log('\n','mathOperator: ', mathOperator);
	if (isNaN(num1) == false){
		console.log('num1: ', num1);
	}
	if (isNaN(num2) == false){
		console.log('num2: ', num2);
	}

	if (mathOperator === "+"){
		console.log('the sum is: ', num1 + num2, '\n');
	}
	if (mathOperator === "-"){
		console.log('the difference is: ', num1 - num2, '\n');
	}
	if (mathOperator === "*"){
		console.log('the product is: ', num1 * num2, '\n');
	}
	if (mathOperator === "/"){
		console.log('the quotient is: ', num1 / num2, '\n');
	}
	if (mathOperator === "sqrt"){
		a = Math.sqrt(num1)
		console.log('square root is: ', a, '\n');
	}
	if (mathOperator === "%"){
		console.log('the remainder is: ', num1 % num2, '\n');
	}


	// This line closes the connection to the command line interface.
	reader.close()

});
