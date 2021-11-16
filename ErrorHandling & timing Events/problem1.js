/* - Divide the employee age by null and handle the error. Also if the error occurs divide it by 2 and print it.*/
const employeesList = [
    {
        "name": "Deepak Kumar",
        "email": "deepak@gmail.com",
        "age": 25
    },
    {
        "name": "Abhishek",
        "email": "abhishek@gmail.com",
        "age": 22
    },
    {
        "name": "amit",
        "email": "amit@gmail.com",
        "age": 33
    }
]

let noOfEmployees = employeesList.length;

for (let i = 0; i < noOfEmployees; i++) {
    try {
        console.log(`Divide age by null`);
        console.log(employeesList[i].age/ null);
    } 
    catch (e) {
        let result = employeesList[i].age / 2;
        console.log(`dividing by 2 ${result}`);
    }
}
