let yourScore = 0
let aiScore = 0

let submitBtn = document.getElementById('submit');
let descTitle = document.querySelectorAll('p')[2];
let input = document.getElementById('name');
let h1El = document.querySelector('h1');

let playerDisplay = document.getElementById('yourPoints');
let aiDisplay = document.getElementById('aiPoints');
let playerName;

let gameDiv = document.getElementById('game');
let results = document.getElementById('results');
let gameChoice = ['rock', 'paper', 'scissors']
let showEl = document.getElementsByClassName('hidden')

submitBtn.addEventListener('submit', (e)=>{
    e.preventDefault();

    playerName = document.getElementById('name').value;
    playerDisplay.innerText = `${playerName}s score: ${yourScore}`;
    document.getElementById('name').value = '';

    h1El.style.margin = '1rem';
    descTitle.style.display = 'none';
    submitBtn.style.display = 'none';
    input.style.display = 'none';

    for(let i=0; i<3; i++){
        showEl[0].classList.remove('hidden');
    };
});

gameDiv.addEventListener('click', (e)=>{
    let randomNumber = Math.floor(Math.random()*3);

    if(e.target.id == 'rock' && randomNumber === 0 || e.target.id == 'paper' && randomNumber === 1 || e.target.id == 'scissors' && randomNumber === 2){
        results.innerText = `You chose ${e.target.id} and the computer chose ${gameChoice[randomNumber]} so it is a draw!`;
        results.style.color = 'black';
    }
    else if(e.target.id == 'rock' && randomNumber === 2 || e.target.id == 'paper' && randomNumber === 0 || e.target.id == 'scissors' && randomNumber === 1){
        yourScore++;
        results.innerText = `You chose ${e.target.id} and the computer chose ${gameChoice[randomNumber]} so you won a point!`;
        results.style.color = 'green';
        playerDisplay.innerText = `${playerName}s score: ${yourScore}`;
    }
    else if(e.target.id == 'rock' && randomNumber === 1 || e.target.id == 'paper' && randomNumber === 2 || e.target.id == 'scissors' && randomNumber === 0){
        aiScore++;
        results.innerText = `You chose ${e.target.id} and the computer chose ${gameChoice[randomNumber]} so the computer won a point!`;
        results.style.color = 'red';
        aiDisplay.innerText = `Computers score: ${aiScore}`;
    };

    if(yourScore === 3){
        results.innerText = 'You won the game!';
        showEl[0].classList.remove('hidden');

        results.style.color = 'green';
        gameDiv.style.display = 'none';
    }
    else if(aiScore === 3){
        results.innerText = 'You lost the game!';
        showEl[0].classList.remove('hidden');

        results.style.color = 'red';
        gameDiv.style.display = 'none';
    };
});