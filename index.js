var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your Name ? ");
console.log("Welcome ! " + userName + " to DO YOU KNOW ASHISH ?");
console.log();
var score = 0;

var highscores = [
  {
    name : "Ashish",
    score : 5
  },
  {
    name : "Kalyan",
    score : 3
  }
]

function checc(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right !");
    score++;
  }
  else {
    console.log("wrong !!!!");
  }
  console.log("Current Score : " + score);
  console.log("--------------");
  console.log();
}
var q1 = {
  q: "Where do I live ?",
  a: "vizag"
}
var q2 = {
  q: "What is my state's capital ?",
  a: "none"
}
var q3 = {
  q: "Which college did I go to ?",
  a: "sathyabama"
}

var q4 = {
  q: "Who is my favorite cricketer ?",
  a: "virat kohli"
}

var q5 = {
  q: "What is my favorite movie ?",
  a: "rab ne banadi jodi"
}

var questionnaire = [q1, q2, q3, q4, q5];
for (var i = 0; i < questionnaire.length; i++) {
  checc(questionnaire[i].q, questionnaire[i].a);
}

console.log("Your Final Score is : " + score);
console.log("Thanks for playing !")
console.log();
console.log("Also check out the high scores !")
console.log("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-")
console.log();

for (var i = 0; i < highscores.length; i++) {
  console.log("At the "+(i+1)+" place :");
  console.log(highscores[i].name);
  console.log(highscores[i].score);
  console.log("--------------");
}
