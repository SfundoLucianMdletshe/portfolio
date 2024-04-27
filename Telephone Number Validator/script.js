const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const RSA = [
    {place: 'Johannesburg', num: '010'},
    {place: 'Witwatersrand', num: '011'},
    {place: 'Pretoria', num: '012'},
    {place: 'Eastern Gauteng / Western and/or Northern Mpumalanga', num: '013'},
    {place: 'Northern North West / Southwestern Limpopo', num: '014'},
    {place: 'Northern / Eastern Limpopo', num: '015'},
    {place: 'Vaal Triangle / Sasolburg', num: '016'},
    {place: 'Southern Mpumalanga', num: '017'},
    {place: 'Southern North West', num: '018'},
    {place: 'Cape Town metropole', num:'021'},
    {place: 'Boland / West Coast', num:'022'},
    {place: 'Worcester / greater Karoo', num:'023'},
    {place: 'Namaqualand (Northern Cape)', num:'027'},
    {place: 'Southern region (Western Cape)', num:'028'},
    {place:'Durban', num:'031'},
    {place:'KZN North Coast region', num:'032'},
    {place:'Pietermaritzburg / KwaZulu-Natal Midlands', num:'033'},
    {place:'Vryheid / Newcastle / Northern KZN', num:'034'},
    {place:'Zululand region', num:'035'},
    {place:'Drakensberg region', num:'036'},
    {place:'KwaZulu-Natal South Coast region', num:'039'},
    {place:'Bhisho', num:'040'},
    {place:'Gqeberha / Uitenhage', num:'041'},
    {place:'Humansdorp', num:'042'},
    {place:'East London / surroundings', num:'043'},
    {place:'Garden Route', num:'044'},
    {place:'Queenstown', num:'045'},
    {place:'Southern region', num:'046'},
    {place:'uMthatha', num:'047'},
    {place:'Steynsburg', num:'048'},
    {place:'Graaff-Reinet', num:'049'},
    {place:'Central / southern region', num:'051'},
    {place:'Eastern part of Northern Cape / far west of NW province', num:'053'},
    {place:'Upington', num:'054'},
    {place:'Kroonstad', num:'056'},
    {place:'Welkom (Goldfields region)', num:'057'},
    {place:'Bethlehem', num:'058'}
];

const checkValidNumber = input => {
    if (input === '') {
      alert('Please provide a telephone number');
      return;
    }
  
    // Replace "+27 " or "+27" with "0"
    const replacedInput = input.replace(/\+?27[\s-]?/, '0');

    const phoneRegex = /^(0)?(\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    const match = replacedInput.match(phoneRegex);
  
    const pTag = document.createElement('p');
    pTag.className = 'results-text';
  
    if (match) {
      const firstThreeDigits = match[2];
      const sanitizedInput = match[1] ? '0' : '' + firstThreeDigits;
      let found = false;
  
      for (const item of RSA) {
        if (item.num === sanitizedInput) {
          pTag.style.color = 'green';
          pTag.appendChild(document.createTextNode(input + ' is a telephone number from ' + item.place));
          found = true;
          break;
        }
      }
  
      if (!found) {
        pTag.style.color = 'red';
        pTag.appendChild(document.createTextNode(input + ' is an ' + 'invalid SA telephone Number'));
      }
    } else {
      pTag.style.color = 'red';
      pTag.appendChild(document.createTextNode(input + ' is an ' + 'invalid SA telephone Number'));
    }
  
    resultsDiv.appendChild(pTag);
  };
  

checkBtn.addEventListener('click', () => {
  checkValidNumber(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkValidNumber(userInput.value);
    userInput.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});
