let playerArray = [];
function displayPlayer() {
    const orderList = document.getElementById('players');
    orderList.innerHTML = '';

    for (let i = 0; i < playerArray.length; i++) {

        if (playerArray.length > 5) {

            alert("you can not add player more than five");
            document.getElementById('Total-Player').innerText = ' '
            return;

        }

        else {

            const name = playerArray[i].pName;
            const li = document.createElement('li')
            li.innerHTML = ` 
                 
                <li>${[i + 1]}.  ${name}</li>
               
               `
            orderList.appendChild(li);
        }
    }

}


function addplayer(player) {

    const playerName = player.parentNode.parentNode.children[0].innerText;
    const playerObj = {
        pName: playerName

    }

    playerArray.push(playerObj);
    player.style.backgroundColor = "gray"

    document.getElementById('Total-Player').innerText = playerArray.length;

    displayPlayer(playerArray);

}


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


function playerExpense() {
    const playerCost = inputField('per-player-field');

    // ----- total player income----- 
    const playerlength = document.getElementById('Total-Player').innerText;

    const playerExpense = playerCost * playerlength
    setelementValue('player-expence', playerExpense);
    return playerExpense;

}


document.getElementById('calc-btn').addEventListener('click', function () {
    playerExpense();
});

document.getElementById('calc-total-btn').addEventListener('click', function () {
    const playerExpense = playerExpense();

    //-------- total cost -----------

    const managerCost = inputField('manager-field');
    const coachCost = inputField('coach-field');
    const totalExpense = playerExpense + managerCost + coachCost;
    setelementValue('total-expense', totalExpense);

});