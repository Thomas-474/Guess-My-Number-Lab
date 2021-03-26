var score = 0;
var amountCorrect = 0;
var highScore = 0;
let totalGuesses = 0;
document.getElementById("submitBtn").disabled = true;

randomNumber = Math.floor(Math.random() * 20)+1;
//console.log(randomNumber);

function startFunction(){
    document.getElementById("submitBtn").disabled = false;
}


function myFunction(){
    var x, text;
    x = document.getElementById("numb").value;
    var numbersGuessedArray = [];

    if (x < 1 || x > 20){
        text = "You need to enter a number between 1 & 20.";
        document.getElementById("response").innerHTML = text;
    }else if (x == randomNumber){
        text = "You guessed correct!.";
        document.getElementById("response").innerHTML = text;
        score += 5;
        document.getElementById("userScore").innerHTML = score;
        amountCorrect += 1;
        document.getElementById("amountNumCorrect").innerHTML = amountCorrect;
        randomNumber = Math.floor(Math.random() * 20)+1;
    }else{
        text = "You guessed wrong. Try again.";
        document.getElementById("response").innerHTML = text;
        numbersGuessedArray.push(x);
        console.log(x);
        score -= 2;
        document.getElementById("userScore").innerHTML = score;
    }
    document.getElementById("numbersGuessed").innerHTML = numbersGuessedArray;

    if (amountCorrect == 20){
        highscore = score;
        document.getElementById("userHighScore").innerHTML = highscore;
        score = 0;
        amountCorrect = 0;
    };
}

