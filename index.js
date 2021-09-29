const chalk = require('chalk');
var readLineSync = require('readline-sync');

var userName = readLineSync.question("What is your name? ");
var score = 0;

var highscore = [{
  name: "Avinash",
  score: 7,
},{
  name: "Aksh",
  score: 5,
}
]

var welcomeMsg = "Welcome to the quiz " + userName + "! Do you know Avinash?";
console.log(chalk.bold(welcomeMsg));

function playQuiz(question, answer){
  var userAns = readLineSync.question(question);

  if(userAns.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Right Answer!"));
    score = score + 1;
  }
  else{
    console.log(chalk.red("Wrong Answer!"));
  }

console.log("Your current score: " + chalk.blue(score));
console.log("--------");
}

var questions = [{
  question:"What is my favourite colour? ", answer:"red"
  }, {
    question:"What is my favourite youtuber's name? ", answer:"Ranveer Allahbadia"
  }, {
    question:"What is my fav food? ",
    answer:"Pizza"
  }, {
    question:"What is my dream city? ",
    answer:"Bangalore"
  }, {
    question:"Who is my favourite IPL Player? ",
    answer:"ABD"
  },{
    question:"What I love to watch the most? ",
    answer:"IPL"
  },{
    question:"Which is my favourite IPL Team? ",
    answer:"RCB"
  }
  ];

for(var i=0; i<questions.length; i++){
  playQuiz(questions[i].question, questions[i].answer);
}

console.log("Quiz over! Your final score is: " + score + "/7");
console.log("Here are the high scores, see if you beat them and let me know so I update it!");

for(var i=0; i<highscore.length; i++){
  console.log(highscore[i].name + " : " + chalk.green(highscore[i].score));
}
