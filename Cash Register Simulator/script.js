let cid = [
  ['10c', 10],
  ['20c', 20],
  ['R1', 30],
  ['R2', 50],
  ['R5', 100],
  ['R10', 200],
  ['R20', 400],
  ['R50', 500],
  ['R100', 1000],
  ['R200', 600]
];

const displayChangeDue = document.getElementById('change-due');
const totalInput = document.getElementById('total');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const cashDrawerDisplay = document.getElementById('cash-drawer-display');

// Function to round to the nearest 10c
const roundToNearestTenCents = amount => {
  return Math.round(amount * 10) / 10;
};

const formatResults = (status, change) => {
  displayChangeDue.innerHTML = `<p>Status: ${status}</p>`;
  change.map(
      money => (displayChangeDue.innerHTML += `<p>${money[0]}: R${money[1].toFixed(2)}</p>`)
  );
  return;
};

const checkCashRegister = () => {
  let total = Number(totalInput.value);
  if (!total) {
      alert('Please enter the total amount.');
      return;
  }

  // Round total and cash to nearest 10 cents
  total = roundToNearestTenCents(total);
  let cashGiven = roundToNearestTenCents(Number(cash.value));

  if (cashGiven < total) {
      alert('Customer does not have enough money to purchase the item');
      cash.value = '';
      return;
  }

  if (cashGiven === total) {
      displayChangeDue.innerHTML =
          '<p>No change due - customer paid with exact cash</p>';
      cash.value = '';
      return;
  }

  let changeDue = cashGiven - total;
  let reversedCid = [...cid].reverse();
  let denominations = [200, 100, 50, 20, 10, 5, 2, 1, 0.2, 0.1];
  let result = { status: 'OPEN', change: [] };
  let totalCID = parseFloat(
      cid
          .map(total => total[1])
          .reduce((prev, curr) => prev + curr)
          .toFixed(2)
  );

  if (totalCID < changeDue) {
      return (displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT FUNDS</p>');
  }

  if (totalCID === changeDue) {
      result.status = 'CLOSED';
  }

  for (let i = 0; i <= reversedCid.length; i++) {
      if (changeDue >= denominations[i] && changeDue > 0) {
          let count = 0;
          let total = reversedCid[i][1];
          while (total > 0 && changeDue >= denominations[i]) {
              total -= denominations[i];
              changeDue = parseFloat((changeDue -= denominations[i]).toFixed(2));
              count++;
          }
          if (count > 0) {
              result.change.push([reversedCid[i][0], count * denominations[i]]);
          }
      }
  }
  if (changeDue > 0) {
      return (displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT FUNDS</p>');
  }

  formatResults(result.status, result.change);
  updateUI(result.change);
};

const checkResults = () => {
  if (!cash.value) {
      return;
  }
  checkCashRegister();
};

const updateUI = change => {
  const currencyNameMap = {
      'R200': 'R200 Notes',
      'R100': 'R100 Notes',
      'R50': 'R50 Notes',
      'R20': 'R20 Notes',
      'R10': 'R10 Notes',
      'R5': 'R5 Coins',
      'R2': 'R2 Coins',
      'R1': 'R1 Coins',
      '20c': '20c Coins',
      '10c': '10c Coins'
  };
  if (change) {
      change.forEach(changeArr => {
          const targetArr = cid.find(cidArr => cidArr[0] === changeArr[0]);
          targetArr[1] = parseFloat((targetArr[1] - changeArr[1]).toFixed(2));
      });
  }

  cash.value = '';
  totalInput.value = '';
  cashDrawerDisplay.innerHTML = `<p><strong>Change in drawer:</strong></p>
      ${cid
        .map(money => `<p>${currencyNameMap[money[0]]}: R${money[1].toFixed(2)}</p>`)
        .join('')}  
  `;

  cashDrawerDisplay.style.transition = 'all 0.3s ease-in-out';
  cashDrawerDisplay.style.transform = 'scale(1.1)';
  setTimeout(() => {
      cashDrawerDisplay.style.transform = 'scale(1)';
  }, 300);
};

purchaseBtn.addEventListener('click', checkResults);
