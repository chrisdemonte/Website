//var homeBtn = document.getElementById("home_btn");
//var javaBtn = document.getElementById("javaApp_btn");
//var webBtn = document.getElementById("webApp_btn");
//var gamesBtn = document.getElementById("games_btn");
//var aboutBtn = document.getElementById("about_btn");

var contentP = document.getElementById("content_p");
var contentH = document.getElementById("content_h");

var homeStr = "<p>Thank you for visiting my website!</p><p> I am Christopher De Monte, a computer science "+
    "student at Queens University. I am interested in developing software applications, front-end and back-end web developement, " +
    "game development, and more. I am proficient in Java and C#, and learning JavaScript and back end." + 
    "</p><p>There isn't much here yet, but there is much in the works.</p>";

var javaStr = "<p><a href=\"https://github.com/chrisdemonte/OpCon-Executable\">Free Operant Contingencies<\a> : An application that runs experiments for research" +
    " in the theory of depressive realism. Originally developed on Java, recently developed with Qualtrics and JavaScript.<\p>" +
    "<p><a href=\"https://github.com/Camposm97/SBUHack-SP21\">My-ECard<\a>:  A Java app for making custom business cards with simple image processing and" +
    " exporting. Made for the 2021 CEWIT Hackathon at Stonybrook.</p>" +
    "<p><a href=\"https://github.com/chrisdemonte/Java-Reflect-Math-App\">Java Reflect Math App<\a> : Demonstration of the Java Math class and the Java Reflect API.<\p> " +
    "<p> <a href= \"https://github.com/chrisdemonte/LinkedList-Demo\">Linked List Demo<\a>: A visual demonstration of Linked List using JavaFX. <\p>"+
    "<p><a href= \"https://github.com/chrisdemonte/I-AM-A-CELL\">I Am a Cell<\a>: A simulation of an animal cell, for the 2019 SCCC Student Hackathon <\p>" +
    "<p><a href= \"https://github.com/chrisdemonte/Stock-App\">Stock Analysis App<\a> : An application that analyzes stock data from an online database, and offers a " +
    "simple stock investing simulator. <\p> " +
    "<p><a href= \"https://github.com/chrisdemonte/CollegeApplicationSystem\">School Schedule Maker<\a> : An android application that utilizes the US Department of Education " +
    "College database and SQL to search for colleges based on search criteria. <\p>";

var webStr = "<p><a href=\"connor_website\\index.html\">Connor's Website<\a> : A simple website for a local musician.<\p>";

var gameStr = "<p>There appears to be nothing here. Looks like I played a game with you.<\p>" ;

var aboutStr = "<p>CHRISTOPHER DE MONTE<\p>" + "<p>(631) 338 - 4535<\p>" + "<p>CHRIS.DEMONTE@YAHOO.COM<\p>" +
    "<p>GITHUB<\p>" + "<p>LINKEDIN<\p>" + "<p>CONTACT ME:<\p>" + "<p>[Nothing here yet!]<\p>";
/*
homeBtn.onclick = function () {
    contentH.innerHTML = "WELCOME!"
    contentP.innerHTML = homeStr
}
document.getElementById("red-plug").onclick = function () {
    contentH.innerHTML = "WELCOME!"
    contentP.innerHTML = homeStr
};
javaBtn.onclick = function () {
    contentH.innerHTML = "JAVA APPLICATIONS"
    contentP.innerHTML = javaStr
}
webBtn.onclick = function () {
    contentH.innerHTML = "WEB APPLICATIONS"
    contentP.innerHTML = webStr 
}
gamesBtn.onclick = function () {
    contentH.innerHTML = "GAMES? Uh oh..."
    contentP.innerHTML = gameStr
}
aboutBtn.onclick = function () {
    contentH.innerHTML = "ABOUT ME"
    contentP.innerHTML = aboutStr
}

*/
document.getElementById("home-label").onclick = function () {
    contentH.innerHTML = "WELCOME!"
    contentP.innerHTML = homeStr
};document.getElementById("java-label").onclick = function () {
    contentH.innerHTML = "JAVA APPLICATIONS"
    contentP.innerHTML = javaStr
};document.getElementById("web-label").onclick = function () {
    contentH.innerHTML = "WEB APPLICATIONS"
    contentP.innerHTML = webStr 
};document.getElementById("games-label").onclick = function () {
    contentH.innerHTML = "GAMES? Uh oh..."
    contentP.innerHTML = gameStr
};document.getElementById("about-label").onclick = function () {
    contentH.innerHTML = "ABOUT ME"
    contentP.innerHTML = aboutStr
};
contentH.innerHTML = "WELCOME!"
contentP.innerHTML = homeStr