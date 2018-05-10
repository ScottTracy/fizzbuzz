let result
for (let i = 0; i < 101; i++) { 
	if (i % 3 === 0 &&  i % 5 === 0) { 
		result = "fizzbuzz" ;}
	else if ( i % 5 === 0) { result = "buzz" ;}
	else if (i % 3 === 0) {result = "fizz";}
	else result = i;
  console.log(result)


	
}