/*1. Find sum of first 10 natural numbers*/

let sum=0;
for(let counter = 1; counter < 11; counter++){
	sum+= counter;
 }
console.log(sum);

sum=0;
let counter=1;
do{
	sum+=counter;
	counter++;
}while(counter<11);
console.log(sum);

sum=0;
counter=1;
while(counter<11){
	sum+=counter;
	counter++;
}
console.log(sum);


/*2. Print fibbonaci series upto first 10 numbers. */

let limit = 10;
let number1 = 0;
let number2 = 1;
let nextNumber = 0;
let series = '';
counter = 0;
for(counter; counter < limit; counter++){
    series = series +' ' +  number1;
    nextNumber = number1 + number2;
    number1 = number2;
    number2 = nextNumber;
}

console.log(series);

number1 = 0;
number2 = 1;
nextNumber = 0;
series = '';
counter = 0;

do{
    series = series + ' ' + number1;
    nextNumber = number1 + number2;
    number1 = number2;
    number2 = nextNumber;
    counter++;
}while(counter < limit)

console.log(series);


number1 = 0;
number2 = 1;
nextNumber = 0;
series = '';
counter = 0;

while(counter < limit){
    series = series + ' ' + number1;
    nextNumber = number1 + number2;
    number1 = number2;
    number2 = nextNumber;
    counter++;    
}

console.log(series);


/*3. Print all the keys and values of employee object used in first problem*/

const employeeDetails = { 
    name: 'Deepak',
    email: 'dp******@gmail.com',
    age: 25,
    address: 'Home Address',
    phone: 1212121212,
    gender: 'male',
    married: false
};


for( let key in employeeDetails){
    console.log(key +' : '+ employeeDetails[key]);
}
