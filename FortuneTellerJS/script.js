var age;
var siblings;
var favColor;
var roybivChoiceUpper;
var birthMonth;
var name;
var yrsRetire;
var place;
var vehicle;
var bankAccount;

function startQuiz(div1, div2, div3) {

    d1 = document.getElementById(div1);
    d2 = document.getElementById(div2);
    d3 = document.getElementById(div3);
    d4 = document.getElementById('center');

    if (d2.style.display == "none") {
        d1.style.display = "none";
        d3.style.display = "none";
        d2.style.display = "flex";
        d4.style.background = "none";
    } else {
        d1.style.display = " ";
        d3.style.display = " ";
        d2.style.display = "none";
    }
}
function PlayAgain(div1, div2) {

    d1 = document.getElementById(div1);
    d2 = document.getElementById(div2);

    if (d2.style.display == "none") {
        d1.style.display = "none";
        d2.style.display = "flex";
    } else {
        d1.style.display = "flex ";
        d2.style.display = "none";
    }
}

function Question1() {
    d1 = document.getElementById('introRow2');
    d2 = document.getElementById('introRow3');
    
    if (d2.style.display == "none") {
        d1.style.display = "none ";
        d2.style.display = "flex";
    } 
}
function Question2() {
    name = document.getElementById('input1').value;
    d1 = document.getElementById('introRow3');
    d2 = document.getElementById('introRow4');

    if (d2.style.display == "none") {
        d1.style.display = "none ";
        d2.style.display = "flex";
    }
}
function Question3() {
    birthMonth = document.getElementById('input2').value;
    
    d1 = document.getElementById('introRow4');
    d2 = document.getElementById('introRow5');

    if (d2.style.display == "none") {
        d1.style.display = "none ";
        d2.style.display = "flex";
    }
}
function Question4() {
    age = document.getElementById('input3').value;
    
    d1 = document.getElementById('introRow5');
    d2 = document.getElementById('introRow6');

    if (d2.style.display == "none") {
        d1.style.display = "none ";
        d2.style.display = "flex";
    }
}
function Question5() {
    siblings = document.getElementById('input4').value;
    
    d1 = document.getElementById('introRow6');
    d2 = document.getElementById('introRow7');

    if (d2.style.display == "none") {
        d1.style.display = "none ";
        d2.style.display = "flex";
    }
}
function Fortune() {
    favColor = document.getElementById('input5').value;
    
    d1 = document.getElementById('introRow7');
    d2 = document.getElementById('fortune');

    if (d2.style.display == "none") {
        d1.style.display = "none ";
        d2.style.display = "flex";
    }
    if (age % 2 == 0 && age >= 1 && age <= 25) {
        yrsRetire = 22;
    }
    else if (age % 2 == 0 && age >= 26 && age <= 50) {
        yrsRetire = 18;
    }
    else if (age % 2 == 0 && age >= 51 && age <= 80) {
        yrsRetire = 10;
    }
    else if (age % 2 == 0 && age > 81) {
        yrsRetire = 2;
    }
    else if (age % 2 != 0 && age >= 1 && age <= 25) {
        yrsRetire = 23;
    }
    else if (age % 2 != 0 && age >= 26 && age <= 50) {
        yrsRetire = 21;
    }
    else if (age % 2 != 0 && age >= 51 && age <= 80) {
        yrsRetire = 11;
    }
    else if (age % 2 != 0 && age >= 81) {
        yrsRetire = 3;
    }

    //This nested If Else statement will choose the vacation home 
    if (siblings == 0) {
        place = "Paris";
    }
    else if (siblings == 1) {
        place = "Berlin";
    }
    else if (siblings == 2) {
        place = "San Francisco";
    }
    else if (siblings == 3) {
        place = "Tokyo Japan";
    }
    else if (siblings > 3) {
        place = "Rome Italy";
    }
    else {
        place = "Cleveland Taxas";
    }

    //This switch statement will choose the future mode of transportation 

    switch (favColor) {
        case "RED":
            vehicle = "MB C250";

            break;
        case "ORANGE":
            vehicle = "1967 Ford Bronco";

            break;
        case "YELLOW":
            vehicle = "Ford Escape";

            break;
        case "BLUE":
            vehicle = "1967 Beetle";

            break;
        case "INDIGO":
            vehicle = "Harley RoadKing";

            break;
        default:
            vehicle = "VW Cabrolet";
            break;
    }


    //This if else statement will process the users future bank account

    if (birthMonth >= 1 && birthMonth <= 4) {
        bankAccount = 25000.00;
    }
    else if (birthMonth >= 5 && birthMonth <= 8) {
        bankAccount = 28000.00;
    }
    else if (birthMonth >= 9 && birthMonth <= 12) {
        bankAccount = 21000.00;
    }
    document.getElementById("center9").style.backgroundImage = "url('images/scroll.jpg')";
    document.getElementById("text").innerHTML = "Congradulations " + name + ". You will retire in "+ yrsRetire + " with $" + bankAccount + " in your bank account, a home in " + place + ", and a " + vehicle + " to drive.";
} 

