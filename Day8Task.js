/*1. Create a function that takes a number and prints all even numbers upto that number*/

function evenNumbers(number){
    for(let i = 0;i<=number;i++){
        if(i%2 !== 0)
            continue;
        else    
            console.log(i);
    } 
}

evenNumbers(23);


/* 2. Create a function that takes 2 parameter => an array of employees and age 
    and returns all employees whose age is less than input age. */



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
         name: 'zsecond name',
         email: 'secondemployee@gmail.com',
         age: 45,
         address: 'Address',
         phone:3552121212,
         gender: 'female',
         married: false
     };

const thirdEmployeeDetails = { 
         name: 'third name',
         email: 'thirdemployee@gmail.com',
         age: 42,
         address: 'Local Address',
         phone: 1265757571,
         gender: 'male',
         married: false
     };

let listOfEmployees = [firstEmployeeDetails, secondEmployeeDetails, thirdEmployeeDetails];

function filterEmployees(listOfEmployees, inputAge){
    let filteredEmployees = listOfEmployees.filter(function(employee){
                                                   return employee.age < inputAge;});

    console.log(filteredEmployees);
}

filterEmployees(listOfEmployees, 44);


/*3. Create a function that takes 2 parameter => an array of employees and an attribute
 and returns all employees sorted based on the emoplees attribute being passed as second parameter.
*/
function sortEmployees(listOfEmployees, attribute){
    listOfEmployees.sort( function(first, second){  
                                if(first[attribute] > second[attribute])
                                  return 1;
                                if(first[attribute] < second[attribute])
                                  return -1;
                                return 0;
                                })
}

sortEmployees(listOfEmployees, 'email');
console.log(listOfEmployees);
