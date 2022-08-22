let playerArray = [];
function displayPlayer() {
    const orderList = document.getElementById('players');
    orderList.innerHTML = '';
    for (i = 0; i < playerArray.length; i++) {
        const name = playerArray[i].pName;
        const li = document.createElement('li')
        li.innerHTML = ` 
         
        <li>${[i + 1]}.  ${name}</li>
       `
        orderList.appendChild(li);
    }
}

function addplayer(player) {
    const playerName = player.parentNode.parentNode.children[0].innerText;
    const playerObj = {
        pName: playerName

    }
    playerArray.push(playerObj);

    document.getElementById('Total-Player').innerText = playerArray.length;

    displayPlayer(playerArray);
}

// ------------ Buget--------- 
function inputField(inputId) {
    const pInputField = document.getElementById(inputId);
    const pInputFieldString = pInputField.value;
    const inputField = parseFloat(pInputFieldString);

    pInputField.value = inputField;
    return inputField;
}

function setelementValue(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;



}
document.getElementById('calc-btn').addEventListener('click', function () {
    const playerIncome = inputField('per-player-field');

    // ----- total player income----- 
    const playerlength = document.getElementById('Total-Player').innerText;

    const playerMoney = playerIncome * playerlength
    setelementValue('player-expence', playerMoney);
    console.log(playerMoney)
})