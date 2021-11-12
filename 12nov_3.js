/*1. Take an array of objects of employees created above and print those employees whose age is less than 50.*/

const firstEmployeeDetails = { 
         name: 'first name',
         email: 'firstemployee@gmail.com',
         age: 55,
         address: 'Home Address',
         phone: 1243434312,
         gender: 'male',
         married: true
     };

const secondEmployeeDetails = { 
        name: 'second name',
        email: 'secondemployee@gmail.com',
        age: 45,
        address: 'Home Address',
        phone:3552121212,
        gender: 'female',
        married: false
    };

const thirdEmployeeDetails = { 
        name: 'third name',
        email: 'thirdemployee@gmail.com',
        age: 42,
        ddress: 'Home Address',
        phone: 12657575712,
        gender: 'male',
        married: false
    };

let listOfEmployees = [firstEmployeeDetails, secondEmployeeDetails, thirdEmployeeDetails];

for(let index=0; index < listOfEmployees.length; index++){
    if(listOfEmployees[index].age < 50)
    console.log(listOfEmployees[index]);
}
