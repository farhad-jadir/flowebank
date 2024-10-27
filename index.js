

document.addEventListener('DOMContentLoaded', () => {
    let balance = 0;
    const balanceDisplay = document.getElementById('balance');
    const addMoneyBtn = document.getElementById('addMoneyBtn');
    const withdrawMoneyBtn = document.getElementById('withdrawMoneyBtn');
    const transactionHistoryBtn = document.getElementById('transactionHistoryBtn');
    const addMoneyForm = document.getElementById('addMoneyForm');
    const withdrawMoneyForm = document.getElementById('withdrawMoneyForm');
    const transactionHistory = document.getElementById('transactionHistory');
    const addAmountInput = document.getElementById('addAmount');
    const withdrawAmountInput = document.getElementById('withdrawAmount');
    const confirmAddBtn = document.getElementById('confirmAddBtn');
    const confirmWithdrawBtn = document.getElementById('confirmWithdrawBtn');
    const transactionTableBody = document.getElementById('transactionTableBody');

    const updateBalanceDisplay = () => {
    balanceDisplay.textContent = `$${balance}`;
};

const addTransaction = (type, amount) => {
    const date = new Date().toLocaleString();
    const row = document.createElement('tr');
    row.innerHTML = `
    <td class="py-2">${date}</td>
    <td class="py-2">${type}</td>
    <td class="py-2">$${amount}</td>
    <td class="py-2">$${balance}</td>
    `;
    transactionTableBody.appendChild(row);
};

addMoneyBtn.addEventListener('click', () => {
    addMoneyForm.classList.toggle('hidden');
    withdrawMoneyForm.classList.add('hidden');
    transactionHistory.classList.add('hidden');
});

withdrawMoneyBtn.addEventListener('click', () => {
    withdrawMoneyForm.classList.toggle('hidden');
    addMoneyForm.classList.add('hidden');
    transactionHistory.classList.add('hidden');
});

transactionHistoryBtn.addEventListener('click', () => {
    transactionHistory.classList.toggle('hidden');
    addMoneyForm.classList.add('hidden');
    withdrawMoneyForm.classList.add('hidden');
});

confirmAddBtn.addEventListener('click', () => {
    const amount = parseFloat(addAmountInput.value);
    if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
    }
    balance += amount;
    updateBalanceDisplay();
    addTransaction('Add', amount);
    addAmountInput.value = '';
    addMoneyForm.classList.add('hidden');
});

confirmWithdrawBtn.addEventListener('click', () => {
    const amount = parseFloat(withdrawAmountInput.value);
    if (isNaN(amount) || amount <= 1) {
    alert('Please enter a valid amount.');
    return;
    }
    if (amount > balance) {
    alert('Insufficient balance.');
    return;
    }
    balance -= amount;
    updateBalanceDisplay();
    addTransaction('Withdraw', amount);
    withdrawAmountInput.value = '';
    withdrawMoneyForm.classList.add('hidden');
    });
});


