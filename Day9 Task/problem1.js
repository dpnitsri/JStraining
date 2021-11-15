/*1. Add the list of employees in a json file and import it in below file to use it. Add unique ids for each employee.*/

import employeesData from './employees.json';

for(const index in employeesData)
    employeesData[index].id= index;

console.log(employeesData);

