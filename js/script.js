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

submitBtn.addEventListener('submit', (e)=>{
    let showEl = document.getElementsByClassName('hidden');
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
    let showEl = document.getElementsByClassName('hidden')
    if(e.target.id == 'rock'){
        if(randomNumber === 0){
            results.innerText = 'You chose rock and the computer chose rock so it is a draw!';
            results.style.color = 'black';
        }
        else if(randomNumber === 1){
            aiScore++;
            results.innerText = 'You chose rock and the computer chose paper giving it a point!';
            results.style.color = 'red';
            aiDisplay.innerText = `Computers score: ${aiScore}`;
        }
        else if(randomNumber === 2){
            yourScore++;
            results.innerText = 'You chose rock and the computer chose scissors giving you a point!';
            results.style.color = 'green';
            playerDisplay.innerText = `${playerName}s score: ${yourScore}`;
        }
    }
    else if(e.target.id == 'paper'){
        if(randomNumber === 0){
            yourScore++;
            results.innerText = 'You chose paper and the computer chose rock giving you a point!';
            results.style.color = 'green';
            playerDisplay.innerText = `${playerName}s score: ${yourScore}`;
        }
        else if(randomNumber === 1){
            results.innerText = 'You chose paper and the computer chose paper so it is a draw!';
            results.style.color = 'black';
        }
        else if(randomNumber === 2){
            aiScore++;
            results.innerText = 'You chose paper and the computer chose scissors giving it a point!';
            results.style.color = 'red';
            aiDisplay.innerText = `Computers score: ${aiScore}`;
        }
    }
    else if(e.target.id == 'scissors'){
        if(randomNumber === 0){
            aiScore++;
            results.innerText = 'You chose scissors and the computer chose rock giving it a point!';
            results.style.color = 'red';
            aiDisplay.innerText = `Computers score: ${aiScore}`;
        }
        else if(randomNumber === 1){
            yourScore++;
            results.innerText = 'You chose scissors and the computer chose paper giving you a point!';
            results.style.color = 'green';
            playerDisplay.innerText = `${playerName}s score: ${yourScore}`;
        }
        else if(randomNumber === 2){
            results.innerText = 'You chose scissors and the computer chose scissors so it is a draw!';
            results.style.color = 'black';
        };
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