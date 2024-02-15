let expenses = [];
let totalExpenses = 0;

function addExpense() {
  const expenseInput = document.getElementById('expenseInput');
  const expenseValue = parseFloat(expenseInput.value);
  if (!isNaN(expenseValue)) {
    expenses.push(expenseValue);
    updateExpenses();
    expenseInput.value = '';
  } else {
    alert('Please enter a valid expense amount.');
  }
}

function updateExpenses() {
  const expenseList = document.getElementById('expenseList');
  expenseList.innerHTML = '';
  totalExpenses = 0;
  for (let i = 0; i < expenses.length; i++) {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.appendChild(document.createTextNode('$' + expenses[i]));
    expenseList.appendChild(listItem);
    totalExpenses += expenses[i];
  }
  document.getElementById('totalExpenses').textContent = '$' + totalExpenses;
}
