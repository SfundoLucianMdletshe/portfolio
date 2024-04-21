const userInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const isValid = int => {
  if (!int || int.match(/[e.]/g)) {
    output.textContent = 'Please enter a valid number';
  } else if (parseInt(int, 10) < 1) {
    output.textContent = 'Please enter a number greater than or equal to 1';
  } else if (parseInt(int, 10) > 10000) {
    output.textContent = 'Please enter a number less than or equal to 10 000';
  } else {
    return true;
  }
  return false;
};  

const convertToRomanNumeral = input => {
  const romanSymbols = [
        ['M', 1000 ],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

  const romanNumerals = [];

  romanSymbols.forEach(function (arr) {
    while (input >= arr[1]) {
      romanNumerals.push(arr[0]);
      input -= arr[1];
    }
  });
  
  return romanNumerals.join('');
};

convertBtn.addEventListener('click', () => {
  if (isValid(userInput.value)) {
    output.innerText = convertToRomanNumeral(userInput.value);
  }
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (isValid(userInput.value)) {
      output.innerText = convertToRomanNumeral(userInput.value);
    }
  }
});
