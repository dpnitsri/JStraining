/* - Create a function that returns array of employees from a random time from 1 to 2 seconds using promise chaining.*/

const employees = [{
    "name":"Deepak",
    "age": 25
},
{
    "name":"Abhishek",
    "age":22
}];

const employeesList = () =>{
     return new Promise((resolve)=>{
        setTimeout(function(){
        const response = employees;
        resolve(response);
        },1000 + Math.random()*1000);
     });
}


employeesList().then(result => console.log(result));
