//adam nelson 072813 Personal Conditionals 
//How many cookies must be made for a party?

var guests= prompt("I am trying to figure out how many cookies to make, how many guests will be at your party?");//declaring variable
var hours= prompt("How long will the party be?");//declaring variable

if (guests>12 && hours>2){
	console.log("Double the recipe!");//making if statement
}else if(guests==12 || hours<2){
	console.log("One batch will be enough!");//making else if statement
}