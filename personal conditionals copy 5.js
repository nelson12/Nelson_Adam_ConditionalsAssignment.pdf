//adam nelson 072813 Personal Conditionals 
//How many cookies need to be made for the party?

var guests= prompt("I am trying to figure out how many cookies to make, how many guests will be at your party?");//declaring variable
var hours= prompt("How long will the party be?");//declaring variable

if (guests>12 && hours>2){
	console.log("Double the recipe!");//if statement
}else if(guests==12 || hours<2){
	console.log("One batch will be enough!");//else if statement
}else{
	console.log("Make a half batch so there are not so many leftovers!!!!")
}//else statement
