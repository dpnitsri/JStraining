/* 1. Take two numbers and perform all the arithmetic operations over them.*/

var a=2,b=7;

console.log(a+b);	//output: 9
console.log(b-a);	//output: 5
console.log(a*b);	//output: 14
console.log(b/a);	//output: 3.5
console.log(b%a);	//output:1
console.log(++a,++b);	//output:3 8
console.log(--a,--b);	//output:2 7
console.log(-a,-b);		//output:-2 -7
console.log(a**b);		//output: 128


/*2. Take 2 numbers and 2 strings and perform addition operation on them in same sequence.*/
var x=2,y=5;
var i='stringI', j='stringJ';
console.log(x+y+i+j);	//output:  7stringIstringJ

/*3. Take 2 Strings and 2 numbers and perform addition operation on them in same sequence.*/

console.log(i+j+x+y);	//output: stringIstringJ25

/*4. Write an operation to get its result as NaN.*/

var number = 5;
var string = 'string';
console.log(number*string);		//output: NaN


/*5. Take 2 boolean variables as true and false and perform And and Or logical operation over them and print the result as well as operation*/
var first = true;
var second = false;

console.log(first && second);	//output: false

console.log(first || second);	//output: true


/*6. Take 2 variables and compare them using == and === such that result of both the comparisons operation is not equal.*/

var one = 4;
var two = 'second';

console.log(one == second); 	//output: false (not Equal)
cnosole.log(one === second);	//output: false (not Equal)








