/*1. Take 2 numbers and print the smallest one amongst them*/

var a=3,b=4;
if(a>b)
	console.log(b);
else						//output: 3
	console.log(a);

/*2. Take 3 numbers and print the biggest one amongst them*/
var x,y,z;

if(x>y){
  	if(x>z)
		console.log(x);
	else
		console.log(z);	
}else{
	if(y>z)							
		console.log(y);
	else
		console.log(z);
}

/*3. Use switch case to return a grade for the score, either "A", "B", "C", "D", or "F". (Take convension for numbers and grades by yourself)
Anything below 50 is F*/

var score;
switch(true){
	case (score<100 && score>90):
		console.log("A");
		break;
	case (score<90 && score>80):
		console.log("B");
		break;
	case (score<80 && score>70):
		consosle.log("c");
		break;
	case (score<70 && score >50):
		console.log("D");
		break;
	case (score <50):
		console.log("F");
		break;
	default:
		console.log(score);
}

