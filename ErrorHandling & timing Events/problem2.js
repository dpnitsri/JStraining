/*- Create a function that prints numbers from m to n after 100ms each. m and n should be taken as paramter in function*/

    function print(m , n){
        let id = setInterval(()=> { 
            console.log(m);
            m++;
            if(m>n)
                clearInterval(id);
        },100);
    }

    print(2,6);
