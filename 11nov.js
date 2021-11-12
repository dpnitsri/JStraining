// DAY 2 Tasks

/* 1. Declare all the variables in above form without initialising and print their value. */

let Name;
let Email;
let Age;
let Address;
let Phone;
let Gender;
let Married;

console.log(Name);  //output: undefined
console.log(Email);  //output: undefined
console.log(Age);  //output: undefined
console.log(Address);  //output: undefined
console.log(Phone);  //output: undefined
console.log(Gender);  //output: undefined
console.log(Married);  //output: undefined

/*2. After printing their value assign them as null and print it again.*/

Name=null;
Age=null;
Email=null;
Address=null;
Phone=null;
Gender=null;
Married=null;

console.log(Name);  //output: null
console.log(Email);  //output: null
console.log(Age);  //output: null
console.log(Address);  //output: null
console.log(Phone);  //output: null
console.log(Gender);  //output: null
console.log(Married);  //output: null

/* 3. Declare an object called employeeDetails and add all the above variables to this object now as keys with value as null and print this object.*/

const employeeDetails = { 
     name:null,
     email:null,
     age:null,
     address:null,
     phone:null,
     gender:null,
     married:null
};

console.log(employeeDetails);    /* output:  {name: null, email: null, age: null, address: null, phone: null, …}
                                              address: null
                                              age: null
                                              email: null
                                              gender: null
                                              married: null
                                              name: null
                                              phone: null
                                              [[Prototype]]: Object 
                                  */




// DAY 3 Tasks

/*1. In the variables declare above assign the variables as appropriate default value instead of null.*/

name = "Deepak";
email = "dpxxxxx@gmail.com";
age = 25;
address = "Home Address";
phone = 9024232323;
gender = "male";
married= false;

employeeDetails.name='Deepak Kumar';
employeeDetails.email='dp******@gmail.com';
employeeDetails.age=25;
employeeDetails.address='Home Location';
employeeDetails.gender='male';
employeeDetails.phone=1212121212;
employeeDetails.married='single';
