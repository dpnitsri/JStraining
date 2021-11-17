/*- Create another promisified function that sorts this employee list from above response by name. Chain it to above promise*/


const employees = [{
    "name":"Deepak",
    "age": 25
},
{
    "name":"Abhishek",
    "age":22
}];

const employeesList = () =>{
     return new Promise((resolve)=>
     {
        setTimeout(function(){
        const response =  employees;
        resolve(response);
        },1000 + Math.random()*1000);
     });
}



const sortByName = (employeesList)=>
{
    return new Promise((response)=> 
        response(employeesList.sort( function(first, second){  
            if(first.name > second.name)
                  return 1;
            if(first.name < second.name)
                  return -1;
            return 0;
        })));
        
}

employeesList()
.then((result)=> sortByName(result))
.then(result=> console.log(result));
