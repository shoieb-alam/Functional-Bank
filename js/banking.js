function getInputValue(inuputId) {
    const inputField = document.getElementById(inuputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clearing input field
    inputField.value = '';
    return amountValue;
}
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    return previousBalanceAmount;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /* const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText); */
    const previousBalanceAmount = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceAmount + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceAmount - amount;
    }
}

// Deposit
document.getElementById('deposit-button').addEventListener
    ('click', function () {
        const depositAmount = getInputValue('deposit-input');
        if (depositAmount > 0) {
            updateTotalField('deposit-total', depositAmount);
            updateBalance(depositAmount, true);
        }
    })

// Withdraw
document.getElementById('withdraw-button').addEventListener
    ('click', function () {
        const withdrawAmount = getInputValue('withdraw-input')
        const cureentBalance = getCurrentBalance();
        if (withdrawAmount > 0 && withdrawAmount <= cureentBalance) {
            updateTotalField('withdraw-total', withdrawAmount);
            updateBalance(withdrawAmount, false);
        }
        if (withdrawAmount > cureentBalance) {
            console.log('You dont have enough money');
        }
    })
