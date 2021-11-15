/*3. Take another paramter as salary and keep it above 500000 in numbers in json and print it upto one decimal place only with unit as Lac*/

import employeesData from './employees.json';


for(const index in employeesData){
    employeesData[index].salary= ((500000*(Math.random()+1))/100000).toFixed(1) + 'Lac';
}

console.log(employeesData);
