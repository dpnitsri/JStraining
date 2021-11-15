/*- Add a js class called Employee and create methods in it to sort employees by different paramters and to filter by age.*/


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

class Employees{
    employeesList;
    constructor(employees){
        this.employeesList = employees;
    }

    sortByParameter(parameter){
        this.employeesList.sort( function(first, second){  
                                    if(first[parameter] > second[parameter])
                                          return 1;
                                    if(first[parameter] < second[parameter])
                                          return -1;
                                    return 0;
                                    })
    }

    filterByage(filterAge){
            return this.employeesList.filter(function(employee){
                                                 return employee.age < filterAge;})
    }
}


let EmployeesList = new Employees(listOfEmployees);

EmployeesList.sortByParameter('name');
console.log(EmployeesList.filterByage(43));
