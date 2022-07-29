function getUserInputId(inputId) {
    const inputAmount = document.getElementById(inputId);
    const inputAmountText = inputAmount.value;
    const inputAmountValue = parseFloat(inputAmountText);
    inputAmount.value = '';
    return inputAmountValue;
}
function updatePreviousAmount(previousId, amount) {

    const previousAmount = document.getElementById(previousId);
    const previousAmountText = previousAmount.innerText;
    const previousAmountValue = parseFloat(previousAmountText);
    previousAmount.innerText = previousAmountValue + amount;

}
function getCurrentBalance() {
    const currentBalance = document.getElementById('balance');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceValue = parseFloat(currentBalanceText);
    return currentBalanceValue;
}
function updateCurrentBalance(previousAmount, previousBalance, isAdd) {
    const currentBalance = document.getElementById('balance');
    if (isAdd == true) {
        currentBalance.innerText = previousBalance + previousAmount;

    }
    else {
        currentBalance.innerText = previousBalance - previousAmount;

    }
}
// for deposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositAmount = getUserInputId('user-deposit-input');

    if (newDepositAmount > 0) {
        updatePreviousAmount('deposit', newDepositAmount);
        const previousBalance = getCurrentBalance();
        updateCurrentBalance(newDepositAmount, previousBalance, true);
        // hide p-text
        const nullP1 = document.getElementById('null-p1');
        nullP1.style.display = 'none';

    }

    else {
        const nullP1 = document.getElementById('null-p1');
        nullP1.style.display = 'block';
        nullP1.style.color = 'red';
        nullP1.innerText = 'Error!!! Please give the correct amount';

    }



});
// for withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawAmount = getUserInputId('user-withdraw-input');
    const previousBalance = getCurrentBalance();

    if (newWithdrawAmount > 0 && previousBalance > newWithdrawAmount) {
        updatePreviousAmount('withdraw', newWithdrawAmount);
        updateCurrentBalance(newWithdrawAmount, previousBalance, false);
        // hide p-text
        const nullP2 = document.getElementById('null-p2');
        nullP2.style.display = 'none';
    }
    else if (previousBalance < newWithdrawAmount) {
        const nullP2 = document.getElementById('null-p2');
        nullP2.style.display = 'block';
        nullP2.style.color = 'red';
        nullP2.innerText = `Error!!! You don't have enough money to withdraw `;

    }
    else {
        const nullP2 = document.getElementById('null-p2');
        nullP2.style.display = 'block';
        nullP2.style.color = 'red';
        nullP2.innerText = 'Error!!! Please give the correct amount';
    }

});