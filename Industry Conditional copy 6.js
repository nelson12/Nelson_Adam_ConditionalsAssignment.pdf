//adam nelson 072813 Industry Conditionals 
//Should you get your incision checked after surgery?

var temp= prompt("I am trying to see if you need to have your incision looked at after surgery What is your temperature?");//Declaring variable
var pain= prompt("On a scale of one to ten, What is your pain level at?");//declaring variable

(temp>102 || pain>6) ? console.log("See your Doctor immediately or go to the ER!"):console.log("Take a pain pill or a Tylenol and get some rest.");//making tenary statement