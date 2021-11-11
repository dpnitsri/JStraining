/* 1. Declare all the variables in above form without initialising and print their value.*/

var name, email, age, address, phone, gender, martial_status;

console.log(name);  //output: undefined
console.log(email);  //output: undefined
console.log(age);  //output: undefined
console.log(address);  //output: undefined
console.log(phone);  //output: undefined
console.log(gender);  //output: undefined
console.log(martial_status);  //output: undefined

/*2. After printing their value assign them as null and print it again.*/

name=age=email=address=phone=martial_status=null;

console.log(name);  //output: null
console.log(email);  //output: null
console.log(age);  //output: null
console.log(address);  //output: null
console.log(phone);  //output: null
console.log(gender);  //output: null
console.log(martial_status);  //output: null

/* 3. Declare an object called employeeDetails and add all the above variables to this object now as keys with value as null and print this object.*/

var employeeDetails = { 
     name:null,
     email:null,
     age:null,
     address:null,
     phone:null,
     gender:null,
     martial_status:null
};

console.log(employeeDetails);    /* output:  {name: null, email: null, age: null, address: null, phone: null, …}
                                              address: null
                                              age: null
                                              email: null
                                              gender: null
                                              martial_status: null
                                              name: null
                                              phone: null
                                              [[Prototype]]: Object 
                                  */




