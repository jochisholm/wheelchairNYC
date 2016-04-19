$(document).foundation()
// this is the first answer for Queensborough Plaza
var street1 = document.getElementById("subway1");
street1.onclick=function() {
	var str = document.getElementById("answerbox");
	str.innerHTML = "Congratulations! This subway line is wheelchair accessible.";
	document.getElementById("answerbox").style.backgroundColor = "green"
	console.log(str.innerhtml);
	
}
// this is the second answer for 34th street
var street2 = document.getElementById("subway2");
street2.onclick=function() {
	var str = document.getElementById("answerbox");
	str.innerHTML = "Nope, this subway is not wheelchair accessible. Some stations only provide access to certain lines, like at 14th Street-Union Square, where the N, Q, R and L can be accessed by an elevator, but the 4, 5 and 6 cannot.";
	document.getElementById("answerbox").style.backgroundColor = "#D40F0F"
	console.log(str.innerhtml);
	
}

// this is the third answer for 57th street
 var street3 = document.getElementById("subway3");
street3.onclick=function() {
	var str = document.getElementById("answerbox");
	str.innerHTML = "Sorry, you can't take this subway. Only 88 out of the city’s 469 subway stations are accessible by wheelchair. That’s only 19%!";
	document.getElementById("answerbox").style.backgroundColor = "#D40F0F"
	console.log(str.innerhtml);
}

var street4 = document.getElementById("subway4");
street4.onclick=function () {
	var str = document.getElementById("answerbox");
	str.innerHTML = "OK, but you should be aware that bus drivers don't always stop for you.";
	document.getElementById("answerbox").style.backgroundColor = "#FFD700"
	console.log(str.innerhtml);
}

var food1 = document.getElementById("rest1");
food1.onclick=function() {
	var str = document.getElementById("answerbox2");
	str.innerHTML = "Sorry, you can't eat here. New York touts itself as a tourist friendly city, but there is currently no data to find a list of wheelchair accessible restaurants.";
	document.getElementById("answerbox2").style.backgroundColor = "#D40F0F"
	console.log(str.innerhtml);

}
// this is the second answer for 34th street
var food2 = document.getElementById("rest2");
food2.onclick=function() {
	var str = document.getElementById("answerbox2");
	str.innerHTML = "Sorry, you can't eat here. Amy Meisner-Threet, 56, has been dating her boyfriend since 2006. His family accepts her, she says, but she can’t join them for meals out. “I can’t go to places in the Bronx that he goes to with his family. They’re creatures of habit. They go where they always go.”";
	document.getElementById("answerbox2").style.backgroundColor = "#D40F0F"
	console.log(str.innerhtml);

}

// this is the third answer for 57th street
 var food3 = document.getElementById("rest3");
food3.onclick=function() {
	var str = document.getElementById("answerbox2");
	str.innerHTML = "Nope. Not here either. Though a lot of restaurants in NYC may consider themselves to be accessible, and may have accessible entrances and exists, they may not have fully accessible restrooms or other facilities.";
	document.getElementById("answerbox2").style.backgroundColor = "#D40F0F"
	console.log(str.innerhtml);
}

var food4 = document.getElementById("rest4");
food4.onclick=function () {
	var str = document.getElementById("answerbox2");
	str.innerHTML = "You're in luck, Carmine's is disability accessible, but be sure to call in and makea reservation ahead of time!";
	document.getElementById("answerbox2").style.backgroundColor = "green"
	console.log(str.innerhtml);
}

var showVar1 = document.getElementById("show1");
showVar1.onclick=function() {
	var str = document.getElementById("answerbox3");
	str.innerHTML = "According to NYtix.com: Most Broadway shows are held in old Broadway theaters that were built in a very different time with different attitudes towards disabled people. These theaters, some of which are over 100 years old, have narrow walkways and lots of steps, making it nearly impossible for the wheelchair-bound to maneuver through them.";
	document.getElementById("answerbox3").style.backgroundColor = "#D40F0F"
	console.log(str.innerhtml);

}
// this is the second answer for 34th street
var showVar2 = document.getElementById("show2");
showVar2.onclick=function() {
	var str = document.getElementById("answerbox3");
	str.innerHTML = "Sorry, you can't eat here. Amy Meisner-Threet, 56, has been dating her boyfriend since 2006. His family accepts her, she says, but she can’t join them for meals out. “I can’t go to places in the Bronx that he goes to with his family. They’re creatures of habit. They go where they always go.”";
	document.getElementById("answerbox3").style.backgroundColor = "#D40F0F"
	console.log(str.innerhtml);

}

// this is the third answer for 57th street
 var showVar3 = document.getElementById("show3");
showVar3.onclick=function() {
	var str = document.getElementById("answerbox3");
	str.innerHTML = "Nope. Not here either. Though a lot of restaurants in NYC may consider themselves to be accessible, and may have accessible entrances and exists, they may not have fully accessible restrooms or other facilities.";
	document.getElementById("answerbox3").style.backgroundColor = "#D40F0F"
	console.log(str.innerhtml);
}

var showVar4 = document.getElementById("show4");
showVar4.onclick=function () {
	var str = document.getElementById("answerbox3");
	str.innerHTML = "You're in luck, Carmine's is disability accessible, but be sure to call in and makea reservation ahead of time!";
	document.getElementById("answerbox3").style.backgroundColor = "green"
	console.log(str.innerhtml);
}

