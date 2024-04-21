const inputText = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

// Function for checking palindrome
const checkPalindrome = () => {

    // No input from user
    if (inputText.value == '') {
        alert('Please input a value');
        return;
    }

    // Remove the previous result
    result.replaceChildren();

    // Non-alphanumeric characters
    const alphanumericStr = inputText.value.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();

    // Reversed user input
    const reversedStr = alphanumericStr.split('').reverse().join('')

    let answer = '';

    // Check for palindrome
    if (alphanumericStr == reversedStr) {
        answer = inputText.value + ' is a palindrome';     
    } else {
        answer = inputText.value + ' is not a palindrome';
    }

    // Display result on p
    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerHTML = answer;
    
    result.appendChild(pTag);

    // Show the result.
    result.classList.remove('hide');
}

// For button click
checkButton.addEventListener('click', () => {
  checkPalindrome();
  inputText.value = '';
});

// For Enter key
inputText.addEventListener('keydown', e => {
  if (e.key == 'Enter') {
    checkPalindrome();
    inputText.value = '';
  }
});