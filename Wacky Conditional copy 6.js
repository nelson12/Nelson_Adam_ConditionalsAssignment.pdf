//adam nelson 072813 Wacky Conditionals 
//How many drunk are you?

var tolerance= prompt("Im determining how drunk you are, How many beers does it take to give you a buzz?");//declaring first variable
var beers=prompt("How many drinks have you had tonight?");//declaring second variable

(tolerance>2 || beers> 6) ? console.log("Your as think as you drunk you are!") : console.log("Your good to go, have a few more!");//Tenary statement