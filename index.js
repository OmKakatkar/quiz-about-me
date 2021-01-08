var readlineSync = require('readline-sync');
var score = 0;
var questions = [
  {
    question:'What is my favourite colour?',
    answer:'red',
  },
  {
    question:'What is my favourite food?',
    answer:'gulab jamun',
  },
  {
    question:'What do I want to become in future?',
    answer:'game developer',
  },
  {
    question:'Which anime is my favourite?',
    answer:'clannad',
  },
  {
    question:'Who is my role model?',
    answer:'kayaba akihiko',
  },
];

for (var ques = 0; ques<questions.length; ques++ ) {
  quiz(questions[ques].question,questions[ques].answer);
  // console.log(questions[ques].question)
}

console.log('Your score is: '+score);

function quiz (question, answer) {
  var userInput = readlineSync.question(question);
  if (userInput.toUpperCase() === answer.toUpperCase()) {
    score = score+1;
    console.log("Yep! That's correct.");
  }else{
    score = score - 1;
    console.log("Nah! That's incorrect.");
  }
}
