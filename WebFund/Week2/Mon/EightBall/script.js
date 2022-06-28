var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

// DOM elements that are referenced
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var ball =  document.getElementById("ball");

// Select a random answer from array lifeAnswers
// If question is blank, answer is blank 
function getAnswer() {
    if(question.value.trim() == ""){
        answer.innerText = "";
        return;
    }
    
    ball.src = 'ball.gif';
    var lifesanswer  = lifesAnswers[Math.floor(Math.random() * lifesAnswers.length)];
    setTimeout(function(){replace(lifesanswer)}, 2500)

    return;    
}

// replace the text of element #answer
// and remove the question
function replace(text) {
    question.value = "";
    answer.innerText = text;
    ball.src = 'ballStill.jpg';
    
    return;
}