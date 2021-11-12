/* 1. Take two numbers and perform all the arithmetic operations over them.*/

let firstNumber=2;
let secondNumber=7;

console.log(firstNumber + secondNumber);	//output: 9
console.log(secondNumber - firstNumber);	//output: 5
console.log(firstNumber * secondNumber);	//output: 14
console.log(secondNumber / firstNumber);	//output: 3.5
console.log(secondNumber % firstNumber);	//output:1
console.log(++firstNumber,++secondNumber);	//output:3 8
console.log(--firstNumber,--secondNumber);	//output:2 7
console.log(-firstNumber,-secondNumber);		//output:-2 -7
console.log(firstNumber ** secondNumber);		//output: 128


/*2. Take 2 numbers and 2 strings and perform addition operation on them in same sequence.*/
firstNumber=2;
secondNumber=5;
let firstString = 'firstString'; 
let secondString = 'secondString';
console.log(firstNumber + secondNumber + firstString + secondString);	//output:  7firstStringsecondString

/*3. Take 2 Strings and 2 numbers and perform addition operation on them in same sequence.*/

console.log(firstString + secondString + firstNumber + secondNumber);	//output: firstStringsecondString25

/*4. Write an operation to get its result as NaN.*/

let number = 5;
let string = 'string';
console.log(number * string);		//output: NaN


/*5. Take 2 boolean variables as true and false and perform And and Or logical operation over them and print the result as well as operation*/
let first = true;
let second = false;

console.log(first && second);	//output: false

console.log(first || second);	//output: true


/*6. Take 2 variables and compare them using == and === such that result of both the comparisons operation is not equal.*/

let one = 4;
let two = 'second';

console.log(one == two); 	//output: false (not Equal)
console.log(one === two);	//output: false (not Equal)








