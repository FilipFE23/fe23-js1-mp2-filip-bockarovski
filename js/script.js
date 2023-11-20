function returnPlayerName(){
    let playerName = document.getElementById('name').value;
    let displayName = document.getElementById('yourScore');
    displayName.innerText = `${playerName}s score 0`;
    console.log(playerName);
    document.getElementById('name').value = '';
};

 