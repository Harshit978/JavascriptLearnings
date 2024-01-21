'use strict';
/*

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';

console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/





function getSecretNumber(){
   return Math.trunc(Math.random()*20 ) +1;
}

function setTextMessage(message){
    document.querySelector('.message').textContent = message;
}

let secretNumber = getSecretNumber();
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);
    if(score>1) {
        if (!guess) {
            console.log('😝 No Number')
        }
        else if (guess === secretNumber) {
            if(score>highScore) highScore = score;
            document.querySelector('.number').textContent = secretNumber;
            setTextMessage( '🎉 Correct Number');
            document.querySelector('.highscore').textContent = highScore;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

        } else if (guess < secretNumber) {
            document.querySelector('.message').textContent = '📉Too low!!';
            score--;
        } else {
            document.querySelector('.message').textContent = '📈Too high!!';
            score--;
        }

        document.querySelector('.score').textContent = score;
    }
    else {
        document.querySelector('.message').textContent = 'You lost the game 🤣';
    }
    document.querySelector('.again').addEventListener('click', function(){
        secretNumber =
            getSecretNumber();
        score =20;
        setTextMessage('Secret Number !!!');
        document.querySelector('.score').textContent = 0;
        document.querySelector('.highscore').textContent = highScore;
        document.querySelector('.number').textContent = '?';

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.guess').value = ''
    })
})